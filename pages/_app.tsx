import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import axios from "axios";
import CountContext from "../components/CountContext";
import UserContext from "../components/UserContext";
import globalVars from "../library/globalVariables";
import theme from "../src/theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class MyApp extends App {
  state = {
    counters: { clientCounter: "", emailsCounter: "", fieldCounter: "" },
    user: {
      username: "",
      signedIn: false
    }
  };

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    this.getCounts();
  }

  getCounts = async () => {
    const resClientCount = await axios({
      method: "GET",
      url: `${globalVars.serverURL}/clients/count`,
      responseType: "json"
    });
    const clientCounter = await resClientCount.data;

    const resFieldsData = await axios({
      method: "GET",
      url: `${globalVars.serverURL}/fields/count`,
      responseType: "json"
    });
    const fieldCounter = await resFieldsData.data;

    const resEmailsCount = await axios({
      method: "GET",
      url: `${globalVars.serverURL}/emails/count`,
      responseType: "json"
    });
    const emailsCounter = await resEmailsCount.data;

    this.setState({
      ...this.state,
      counters: { clientCounter, fieldCounter, emailsCounter }
    });
  };

  setUser = username => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, username, signedIn: true }
    });
    sessionStorage.setItem("user", this.state.user.username);
    sessionStorage.setItem("signedIn", this.state.user.signedIn.toString());
    Router.push("/dashboard");
  };

  checkUser = () => {
    sessionStorage.getItem("signedIn") === "false"
      ? Router.push("/")
      : this.setState({
          ...this.state,
          user: {
            ...this.state.user,
            username: sessionStorage.getItem("user"),
            signedIn: true
          }
        });
  };

  logoutUser = () => {
    this.setState(
      {
        ...this.state,
        user: { ...this.state.user, username: "", signedIn: false }
      },
      () => {
        sessionStorage.setItem("user", this.state.user.username);
        sessionStorage.setItem("signedIn", this.state.user.signedIn.toString());
      }
    );
    Router.push("/");
  };

  componentDidUpdate() {
    console.log(this.state.user);
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
          <CountContext.Provider value={this.state.counters}>
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
