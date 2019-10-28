import { useState } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import Button from "./Button";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import stringMethods from "../../library/stringMethods";
import { Typography, Box } from '@material-ui/core';

const RegisterForm = ({ changeToLogin }) => {
  const [regUser, setRegUser] = useState({
    username: "",
    password: "",
    repeatPassword: ""
  });

  const onChange = e => {
    setRegUser({ ...regUser, [e.target.name]: e.target.value });
  };

  const sentFormToBe = async () => {
    const { username, password } = regUser;

    const userRes = await axios({
      method: "POST",
      data: { username, password },
      url: `${globalVars.serverURL}/users`,
      responseType: "json"
    });
    const userData = await userRes.data;

    switch (userData.msg) {
      case globalVars.msgSuccess:
        alert(languages.en.success);
        changeToLogin();
        break;
      case "Exist":
        alert(languages.en.userAlreadyExists);
        break;
      default:
        alert(languages.en.somethingWentWrong);
    }
  };

  const onRegister = () => {
    regUser.password === regUser.repeatPassword
      ? sentFormToBe()
      : alert(languages.en.passwordsDoesNotMatch);
  };

  return (
    <>
      <Typography component="h2" variant="h4" gutterBottom>
        {new stringMethods(languages.en.register)
          .firstCharUpperCase()
          .getString()
        }
      </Typography>
      <form>
        <TextInput
          onChange={onChange}
          type="text"
          value={regUser.username}
          text="username"
          title={new stringMethods(languages.en.username)
            .firstCharUpperCase()
            .getString()}
        />
        <TextInput
          onChange={onChange}
          type="password"
          value={regUser.password}
          text="password"
          title={languages.en.password}
        />
        <TextInput
          onChange={onChange}
          type="password"
          value={regUser.repeatPassword}
          text="repeatPassword"
          title={new stringMethods(languages.en.repeatPassword)
            .firstCharUpperCase()
            .getString()}
        />
        <Box display="flex" justifyContent="flex-end" mt="2rem">
          <Button onClick={onRegister} text={languages.en.register} variant="contained" />
        </Box>
      </form>
    </>
  );
};

export default RegisterForm;
