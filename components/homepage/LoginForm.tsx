import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import TextInput from "./TextInput";
import Button from "./Button";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import stringMethods from "../../library/stringMethods";
import { Typography, Box } from "@material-ui/core";

const LoginForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const userContext = useContext(UserContext);

  const onChange = e => {
    e.target.name === "username"
      ? setUser({ ...user, username: e.target.value })
      : setUser({ ...user, password: e.target.value });
  };

  const onLogin = async () => {
    const userRes = await axios({
      method: "POST",
      data: user,
      url: `${globalVars.serverURL}/users/authenticate-user`,
      responseType: "json"
    });
    const userData = await userRes.data;
    if (userData.msg === "Success") {
      userContext.setUser(userData.key);
    } else {
      alert(languages.en.somethingWentWrong);
    }
  };

  return (
    <>
      <Typography component="h2" variant="h4" gutterBottom>
        {new stringMethods(languages.en.login).firstCharUpperCase().getString()}
      </Typography>
      <form>
        <TextInput
          onChange={onChange}
          type="text"
          value={user.username}
          text="username"
          title={new stringMethods(languages.en.username)
            .firstCharUpperCase()
            .getString()}
        />
        <TextInput
          onChange={onChange}
          type="password"
          value={user.password}
          text="password"
          title={languages.en.password}
        />
        <Box mt="2rem" display="flex" justifyContent="flex-end">
          <Button onClick={onLogin} text={languages.en.login} variant="contained" />
        </Box>
      </form>
    </>
  );
};

export default LoginForm;
