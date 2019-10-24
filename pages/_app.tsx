import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import CountContext from "../components/CountContext";
import UserContext from "../components/UserContext";
import theme from "../src/theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class MyApp extends App {
  state = {
    counters: { clientCounter: "", emailsCounter: "", fieldCounter: "" },
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
    console.log(userkey);
    this.setState({
      ...this.state,
      user: { ...this.state.user, userkey, signedIn: true }
    });
    sessionStorage.setItem("userkey", this.state.user.userkey);
    sessionStorage.setItem("signedIn", this.state.user.signedIn.toString());
    Router.push({
      pathname: `/emails/${this.state.user.userkey}`,
    });
  };

  checkUser = () => {
    sessionStorage.getItem("signedIn") === "false"
      ? Router.push("/")
      : this.setState({
          ...this.state,
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

  setCounters = (data) => {
    this.setState({
      ...this.state,
      counters: data
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>CRM APP</title>
        </Head>
        <UserContext.Provider
          value={{
            setUser: this.setUser,
            logoutUser: this.logoutUser,
            checkUser: this.checkUser,
            user: this.state.user
          }}
        >
          <CountContext.Provider
            value={{
              setCounters: this.setCounters,
              counters: this.state.counters
            }}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CountContext.Provider>
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}
