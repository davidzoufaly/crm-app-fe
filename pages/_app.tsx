import React from "react";
import App from "next/app";
import Router from "next/router";
import UserContext from "../components/UserContext";
import theme from "../src/theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default class MyApp extends App {
  state = {
    user: {
      userkey: "",
      signedIn: false
    }
  };

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  setUser = userkey => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, userkey, signedIn: true }
    });
    Router.push(`/dashboard/${this.state.user.userkey}`);
    sessionStorage.setItem("userkey", this.state.user.userkey);
    sessionStorage.setItem("signedIn", this.state.user.signedIn.toString());
  };

  checkUser = () => {
    sessionStorage.getItem("signedIn") === "false"
      ? Router.push("/")
      : this.setState({
          user: {
            ...this.state.user,
            userkey: sessionStorage.getItem("userkey"),
            signedIn: true
          }
        });
  };

  logoutUser = () => {
    this.setState(
      {
        ...this.state,
        user: { ...this.state.user, userkey: "", signedIn: false }
      },
      () => {
        sessionStorage.setItem("userkey", this.state.user.userkey);
        sessionStorage.setItem("signedIn", this.state.user.signedIn.toString());
      }
    );
    Router.push("/");
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <UserContext.Provider
          value={{
            setUser: this.setUser,
            logoutUser: this.logoutUser,
            checkUser: this.checkUser,
            user: this.state.user
          }}
        >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container maxWidth="lg">
              <Box py="7rem">
                <Component {...pageProps} />
              </Box>
              </Container>
            </ThemeProvider>
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}
