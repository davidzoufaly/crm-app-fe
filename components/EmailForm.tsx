import axios from "axios";
import globalVars from "../library/globalVariables";
import { useState, useEffect } from "react";

const EmailForm = ({ to, isEmailCreated, toggleIsEmailCreated, unCheckAll }: any) => {
  const initEmail = { to, subject: "", message: "" };
  const [email, setEmail] = useState(initEmail);

  useEffect(() => {
    setEmail({ ...email, to: to });
  }, [to]);

  const sendEmail = async e => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      data: email,
      url: `${globalVars.serverURL}/emails/send`,
      responseType: "json"
    });
    const data = await res.data;
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
    <form onSubmit={sendEmail}>
      <label htmlFor="email-to">To</label>
      <input type="text" id="email-to" name="to" value={email.to} disabled />
      <label htmlFor="email-subject">Subject</label>
      <input
        type="text"
        id="email-to"
        name="subject"
        value={email.subject}
        onChange={onChange}
      />
      <label htmlFor="email-message">Message</label>
      <textarea name="message" onChange={onChange} value={email.message} />
      <button onClick={toggleIsEmailCreated}>Cancel</button>
      <button type="submit">Send</button>
    </form>
  ) : null;
};

export default EmailForm;
