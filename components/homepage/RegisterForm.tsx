import { useState } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import LoginButton from "./Button";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import stringMethods from "../../library/stringMethods";

const RegisterForm = () => {
  const [regUser, setRegUser] = useState({
    username: "",
    password: "",
    repeatPassword: ""
  });

  const onChange = e => {
    switch (e.target.name) {
      case "username":
        return setRegUser({ ...regUser, username: e.target.value });
      case "password":
        return setRegUser({ ...regUser, password: e.target.value });
      case "repeat-password":
        return setRegUser({ ...regUser, repeatPassword: e.target.value });
    }
  };

  const sentFormToBe = async () => {
    const {username, password } = regUser;

    const userRes = await axios({
      method: "POST",
      data: {username, password},
      url: `${globalVars.serverURL}/users`,
      responseType: "json"
    });
    const userData = await userRes.data;
    console.log(userRes);
    if (userData.msg === "Success") {
      alert(languages.en.success);
    } else if(userData.msg === "Exist"){
      alert(languages.en.userAlreadyExists);
    } else {
      alert(languages.en.somethingWentWrong);
    }
  };

  const onRegister = () => {
      regUser.password === regUser.repeatPassword
        ? sentFormToBe()
        : alert(languages.en.passwordsDoesNotMatch)
  };

  return (
    <>
      <h2>Register</h2>
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
          text="repeat-password"
          title={new stringMethods(languages.en.repeatPassword)
            .firstCharUpperCase()
            .getString()}
        />
        <LoginButton onClick={onRegister} text={languages.en.register} />
      </form>
    </>
  );
};

export default RegisterForm;
