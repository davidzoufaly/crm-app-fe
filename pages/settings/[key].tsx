import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../components/UserContext";
import DefaultFields from "../../components/settings/DefaultFields";
import CustomFields from "../../components/settings/customFields/CustomFields";
import LoadingSpinner from "../../components/LoadingSpinner";
import EmailSettings from "../../components/settings/EmailSettings";
import WebForm from "../../components/settings/webform/WebForm";
import globalVars from "../../library/globalVariables";
import stringMethods from "../../library/stringMethods";
import Typography from "@material-ui/core/Typography";

const Settings = ({ dataFields, username, pass }: any) => {
  const router = useRouter();
  const [fields, setField] = useState(dataFields);
  const [initialized, setInitialized] = useState(false);
  const user = useContext(UserContext);

  const refreshList = async () => {
    //get data from DB after change
    const res = await axios({
      method: "get",
      url: `${globalVars.serverURL}/fields/`,
      responseType: "json"
    });
    const data = await res.data;
    setField(data);
  };

  useEffect(() => {
    //title from url
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .removeSlashAndTextAfter()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    //componendDidMount effect
    setInitialized(true);
    user.checkUser();
  }, [router]);

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .removeSlashAndTextAfter()
    .firstCharUpperCase()
    .getString();

  return !user.user.signedIn && !initialized ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <Typography variant="h3" component="h1" gutterBottom>
        {h1}
      </Typography>
      <DefaultFields fields={fields} />
      <CustomFields fields={fields} refreshList={refreshList} />
      <EmailSettings username={username} pass={pass} />
      <WebForm fields={fields} />
    </div>
  );
};

Settings.getInitialProps = async (context : any) => {
  const resFields = await axios({
    method: "GET",
    params: {key: context.query.key},
    url: `${globalVars.serverURL}/fields`,
    responseType: "json"
  });
  const dataFields = await resFields.data;

  const resEmailSettings = await axios({
    method: "GET",
    params: {key: context.query.key},
    url: `${globalVars.serverURL}/emails/email-settings`,
    responseType: "json"
  });

  const dataEmailSettings = await resEmailSettings.data;
  const {username, pass} = await dataEmailSettings;

  return { dataFields, username, pass };
};

export default Settings;
