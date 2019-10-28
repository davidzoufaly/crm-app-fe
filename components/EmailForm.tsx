import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import languages from "../library/languages";
import globalVars from "../library/globalVariables";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography, TextField, Button, Grid } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

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
    }
  })
);

const EmailForm = ({
  to,
  isEmailCreated,
  toggleIsEmailCreated,
  unCheckAll
}: any) => {
  const initEmail = { to: to, subject: "", message: "" };
  const [email, setEmail] = useState(initEmail);
  const [spinner, setSpinner] = useState(false);
  const user = useContext(UserContext);
  const classes = useStyles({});

  useEffect(() => {
    setEmail({ ...email, to: to });
  }, [to]);

  const sendEmail = async e => {
    e.preventDefault();
    setSpinner(true);

    const res = await axios({
      method: "post",
      data: email,
      url: `${globalVars.serverURL}/emails/send`,
      params: { key: user.user.userkey },
      responseType: "json"
    });

    console.log(res);

    const data = await res.data;
    data ? setSpinner(false) : null;
    if (
      data === globalVars.msgSuccess ||
      data === "Setup your email settings first"
    ) {
      setEmail(initEmail);
      toggleIsEmailCreated();
      // if email is sending from clients page
      unCheckAll ? unCheckAll() : null;
      data === globalVars.msgSuccess
        ? alert(languages.en.yourEmailSentSucces)
        : alert(languages.en.setupYourEmailSettings);
    } else {
      alert(languages.en.somethingWentWrong);
    }
  };

  const onChange = e => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  return isEmailCreated && to.length > 0 ? (
    <Box className={classes.formWrapper}>
      <Typography component="h2" variant="h4" gutterBottom>
        {languages.en.email}
      </Typography>
      <form onSubmit={sendEmail}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              id="email-to"
              margin="normal"
              fullWidth
              multiline
              label={languages.en.to}
              name="to"
              value={email.to}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              id="email-subject"
              name="subject"
              margin="normal"
              fullWidth
              label={languages.en.subject}
              autoFocus={true}
              value={email.subject}
              onChange={onChange}
              disabled={spinner}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              multiline
              rows="4"
              fullWidth
              label={languages.en.message}
              onChange={onChange}
              value={email.message}
              disabled={spinner}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" mt="2rem">
              {spinner ? <CircularProgress /> : null}
              <Button
                onClick={toggleIsEmailCreated}
                color="secondary"
                variant="contained"
                style={{marginRight: "1rem"}}
              >
                {languages.en.cancel}
              </Button>
              <Button type="submit" color="primary" variant="contained" startIcon={<SendIcon/>}>
                {languages.en.send}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  ) : null;
};

export default EmailForm;
