import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import TextInput from "./TextInput";
import LoginButton from "./Button";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import stringMethods from "../../library/stringMethods";

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
    console.log(userData)
    if (userData.msg === "Success") {
      userContext.setUser(userData.key);
    } else {
      alert(languages.en.somethingWentWrong);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form>
        <TextInput
          onChange={onChange}
          type="text"
          value={user.username}
          text="username"
          title={new stringMethods(languages.en.username).firstCharUpperCase().getString()}
        />
        <TextInput
          onChange={onChange}
          type="password"
          value={user.password}
          text="password"
          title={languages.en.password}
        />
        <LoginButton onClick={onLogin} text={languages.en.login} />
      </form>
    </>
  );
};

export default LoginForm;
