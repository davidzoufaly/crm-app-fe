import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/homepage/LoginForm";
import RegisterForm from "../components/homepage/RegisterForm";
import Button from "../components/homepage/Button";
import languages from "../library/languages";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
// import image from "../src/homepageBackground.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      padding: theme.spacing(3),
      boxShadow: theme.shadows["1"],
      backgroundColor: theme.palette.grey["200"],
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    textField: {
      marginTop: theme.spacing(2)
    },
    container: {
      // backgroundImage: `url(${image})`,
    },
  })
);

const Index = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const classes = useStyles({});

  useEffect(() => {
    document.title = languages.en.indexTitle;
  }, [router]);

  const changeToLogin = () => {
    setIsLogin(true);
  };

  return (
    <Box width={700} maxWidth="100%" margin="auto" className={classes.container}>
      <Box textAlign="center">
      <Typography variant="h3" component="h1" gutterBottom>
        CRM-APP
      </Typography>
      <Typography variant="h5" gutterBottom>{languages.en.welcomeH1}</Typography>
      </Box>
        <Grid container spacing={4} justify="center">
          <Grid item>
        <Button
          onClick={() => setIsLogin(false)}
          text={languages.en.register}
          variant="outlined"
        />
        </Grid>
        <Grid item>
        <Button onClick={() => setIsLogin(true)} text={languages.en.login} variant="outlined"/>
        </Grid>
        </Grid>
      <Box className={classes.formWrapper} margin="auto">
        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm changeToLogin={changeToLogin} />
        )}
      </Box>
    </Box>
  );
};

export default Index;
