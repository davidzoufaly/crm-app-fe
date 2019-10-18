import axios from "axios";
import { useState, useRef } from "react";
import globalVars from "../../library/globalVariables";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const EmailSettings = ({ data }: any) => {
  const [emailSettings, setEmailSettings] = useState(data);
  const passEl = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const {username, pass} = emailSettings;

    const res = await axios({
      method: "post",
      url: `${globalVars.serverURL}/emails`,
      data: {username, pass},
      responseType: "json"
    });
    const data = res.data;
    if (data === "Success") {
      alert("Your email settings has been successfully changed!");
    } else {
      alert("Something went wrong!");
    }
  };

  const showPass = (e) => {
      e.preventDefault();
      passEl.current.type = "text";
  }

  const onChange = e => {
    setEmailSettings({ ...emailSettings, [e.target.name]: e.target.value });
  };
  return (
    <>
    <Typography variant="h4" component="h2" gutterBottom>E-mail account</Typography>
    <form onSubmit={onSubmit}>
      <label htmlFor="acc-name">Name</label>
      <input
        id="acc-name"
        type="text"
        name="username"
        value={emailSettings.username}
        onChange={onChange}
      />
      <label htmlFor="acc-pass">Password</label>
      <input
        id="acc-pass"
        type="password"
        name="pass"
        ref={passEl}
        value={emailSettings.pass}
        onChange={onChange}
      />
      <Button variant="contained" color="primary" onClick={showPass}>Show Password</Button>
      <Button variant="contained" color="primary" type="submit">Save</Button>
    </form>
    </>
  );
};

export default EmailSettings;
