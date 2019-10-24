import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";
import globalVars from "../../library/globalVariables";

const LoginForm = () => {
    const [user, setUser] = useState({username : "", password : "" });
    const userContext = useContext(UserContext);

    const onChange = (e) => {
        e.target.name === "username"
            ? setUser({...user, username: e.target.value})
            : setUser({...user, password: e.target.value})
    }

    const onLogin = async() => {
        const userRes = await axios({
            method: "POST",
            data: user,
            url: `${globalVars.serverURL}/users`,
            responseType: "json"
        })
        const userData = await userRes.data;
        if(userData.msg === "Success") {
            userContext.setUser(user.username);
        } else {
            alert("Incorrect username or password")
        }
    }

    return (
        <>  
            <form>
                <UsernameInput onChange={onChange} username={user.username}/>
                <PasswordInput onChange={onChange} password={user.password}/>
                <LoginButton onLogin={onLogin} />
            </form>
        </>
    )
}

export default LoginForm;