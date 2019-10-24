import axios from "axios";
import { useState, useRef } from "react";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const EmailSettings = ({ data }: any) => {
  const [emailSettings, setEmailSettings] = useState(data);
  const [isPassShown, setIsPassShown] = useState(false);
  const passEl = useRef(null);

  const onSubmit = async e => {
    e.preventDefault();

    const { username, pass } = emailSettings;

    const res = await axios({
      method: "post",
      url: `${globalVars.serverURL}/emails`,
      data: { username, pass },
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
    if(!isPassShown) {
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
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        {languages.en.emailAccount}
      </Typography>
      <form onSubmit={onSubmit}>
        <label htmlFor="acc-name">{languages.en.email}</label>
        <input
          id="acc-name"
          type="text"
          name="username"
          autoComplete="email"
          value={emailSettings.username}
          onChange={onChange}
        />
        <label htmlFor="acc-pass">{languages.en.password}</label>
        <input
          id="acc-pass"
          type="password"
          autoComplete="current-password"
          name="pass"
          ref={passEl}
          value={emailSettings.pass}
          onChange={onChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={togglePass}
        >
          {isPassShown ? languages.en.hidePassword : languages.en.showPassword}
        </Button>
        <Button variant="contained" color="primary" type="submit">
          {languages.en.save}
        </Button>
      </form>
    </>
  );
};

export default EmailSettings;
