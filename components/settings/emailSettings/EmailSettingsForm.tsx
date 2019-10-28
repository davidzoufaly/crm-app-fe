import { useState, useRef, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import globalVars from "../../../library/globalVariables";
import languages from "../../../library/languages";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { TextField, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows["1"],
      padding: theme.spacing(3),
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

const EmailSettingsForm = ({ username, pass }) => {
  const [emailSettings, setEmailSettings] = useState({ username, pass });
  const [isPassShown, setIsPassShown] = useState(false);
  const passEl = useRef(null);
  const user = useContext(UserContext);
  const classes = useStyles({});

  const onSubmit = async e => {
    e.preventDefault();

    const res = await axios({
      method: "post",
      url: `${globalVars.serverURL}/emails`,
      params: { key: user.user.userkey },
      data: emailSettings,
      responseType: "json"
    });
    const data = res.data;
    if (data === "Success") {
      alert(languages.en.emailSettingsUpdatedSuccess);
    } else {
      alert(languages.en.somethingWentWrong);
    }
  };

  const togglePass = e => {
    e.preventDefault();
    if (!isPassShown) {
      passEl.current.type = "text";
      setIsPassShown(true);
    } else {
      passEl.current.type = "password";
      setIsPassShown(false);
    }
  };

  const onChange = e => {
    setEmailSettings({ ...emailSettings, [e.target.name]: e.target.value });
  };

  return (
    <Box mt="1rem" mb="5rem">
      <Typography variant="body1" gutterBottom>
        {languages.en.onlyGoogleAcc}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {languages.en.setupeLessSecure}
      </Typography>
      <Box className={classes.formWrapper}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <TextField
                id="acc-name"
                type="text"
                name="username"
                autoComplete="email"
                value={emailSettings.username}
                onChange={onChange}
                margin="normal"
                label={languages.en.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                id="acc-pass"
                type="password"
                autoComplete="current-password"
                name="pass"
                margin="normal"
                inputRef={passEl}
                value={emailSettings.pass}
                onChange={onChange}
                label={languages.en.password}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                style={{marginRight: "1rem"}}
                onClick={togglePass}
                startIcon={
                  isPassShown ? <VisibilityOffIcon /> : <VisibilityIcon />
                }
              >
                {isPassShown ? languages.en.password : languages.en.password}
              </Button>
              <Button variant="contained" color="primary" type="submit">
                {languages.en.save}
              </Button>            
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default EmailSettingsForm;
