import { useState, useEffect } from "react";
import axios from "axios";
import languages from "../library/languages";
import globalVars from "../library/globalVariables";
import CircularProgress from "@material-ui/core/CircularProgress";

const EmailForm = ({
  to,
  isEmailCreated,
  toggleIsEmailCreated,
  unCheckAll
}: any) => {
  const initEmail = { to : to, subject: "", message: "" };
  const [email, setEmail] = useState(initEmail);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setEmail({ ...email, to : to });
  }, [to]);

  const sendEmail = async e => {
    e.preventDefault();
    setSpinner(true);

    const res = await axios({
      method: "post",
      data: email,
      url: `${globalVars.serverURL}/emails/send`,
      responseType: "json"
    });

    const data = await res.data;
    data ? setSpinner(false) : null;

    if (data.msg === globalVars.msgSuccess) {
      alert(languages.en.yourEmailSentSucces);
      setEmail(initEmail);
      // if email is sending from clients page
      toggleIsEmailCreated();
      unCheckAll ? unCheckAll() : null;
    } else {
      alert(languages.en.somethingWentWrong);
    }
  };

  const onChange = e => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  return isEmailCreated && to.length > 0 ? (
    <>
    <h2>{languages.en.email}</h2>
    <form onSubmit={sendEmail}>
      <label htmlFor="email-to">{languages.en.to}</label>
      <input type="text" id="email-to" name="to" value={email.to} disabled />
      <label htmlFor="email-subject">
        {languages.en.subject}
      </label>
      <input
        type="text"
        id="email-subject"
        name="subject"
        autoFocus={true}
        value={email.subject}
        onChange={onChange}
        disabled={spinner}
      />
      <label htmlFor="email-message">
        {languages.en.message}
      </label>
      {spinner ? <CircularProgress /> : null}
      <textarea
        name="message"
        onChange={onChange}
        value={email.message}
        disabled={spinner}
      />
      <button onClick={toggleIsEmailCreated}>{languages.en.cancel}</button>
      <button type="submit">{languages.en.send}</button>
    </form>
    </>
  ) : null;
};

export default EmailForm;
