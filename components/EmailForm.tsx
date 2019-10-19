import axios from "axios";
import globalVars from "../library/globalVariables";
import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const EmailForm = ({
  to,
  isEmailCreated,
  toggleIsEmailCreated,
  unCheckAll
}: any) => {
  const initEmail = { to, subject: "", message: "" };
  const [email, setEmail] = useState(initEmail);
  const [spinner, setSpinner] = useState(false);

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
      responseType: "json"
    });
    const data = await res.data;
    data ? setSpinner(false) : null;
    if (data.msg === "Success") {
      alert("Your email has been succesfully sent.");
      setEmail(initEmail);
      // if email is sending from clients page
      toggleIsEmailCreated();
      unCheckAll ? unCheckAll() : null;
    } else {
      alert("Something went wrong!");
    }
  };

  const onChange = e => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  return isEmailCreated && to.length > 0 ? (
    <>
    <h2>Email</h2>
    <form onSubmit={sendEmail}>
      <label htmlFor="email-to">To</label>
      <input type="text" id="email-to" name="to" value={email.to} disabled />
      <label htmlFor="email-subject">
        Subject
      </label>
      <input
        type="text"
        id="email-to"
        name="subject"
        autoFocus={true}
        value={email.subject}
        onChange={onChange}
        disabled={spinner}
      />
      <label htmlFor="email-message">Message</label>
      {spinner ? <CircularProgress /> : null}
      <textarea
        name="message"
        onChange={onChange}
        value={email.message}
        disabled={spinner}
      />
      <button onClick={toggleIsEmailCreated}>Cancel</button>
      <button type="submit">Send</button>
    </form>
    </>
  ) : null;
};

export default EmailForm;
