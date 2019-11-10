import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import fieldsReducer from "../../reducers/fieldsReducer";
import UserContext from "../../components/UserContext";
import DefaultFieldsSection from "../../components/settings/DefaultFieldsSection";
import CustomFieldsSection from "../../components/settings/customFields/CustomFieldsSection";
import LoadingSpinner from "../../components/LoadingSpinner";
import EmailSettingsSection from "../../components/settings/emailSettings/EmailSettingsSection";
import WebFormSection from "../../components/settings/webForm/WebFormSection";
import globalVars from "../../library/globalVariables";
import stringMethods from "../../library/stringMethods";
import Typography from "@material-ui/core/Typography";

const Settings = ({ dataFields, username, pass }: any) => {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);
  const [sections, setSection] = useState({});
  const user = useContext(UserContext);

  const [state, dispatch] = useReducer(fieldsReducer, dataFields);

  const toggleSection = e => {
    setSection({
      ...sections,
      [e.target.name]: e.target.checked
    });
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
      <DefaultFieldsSection
        state={state}
        toggleSection={toggleSection}
        sections={sections}
      />
      <CustomFieldsSection
        state={state}
        dispatch={dispatch}
        sections={sections}
        toggleSection={toggleSection}
      />
      <EmailSettingsSection
        username={username}
        pass={pass}
        toggleSection={toggleSection}
        sections={sections}
      />
      <WebFormSection
        state={state}
        dispatch={dispatch}
        toggleSection={toggleSection}
        sections={sections}
      />
    </div>
  );
};

Settings.getInitialProps = async (context: any) => {
  const resFields = await axios({
    method: "GET",
    params: { key: context.query.key },
    url: `${globalVars.serverURL}/fields`,
    responseType: "json"
  });
  const dataFields = await resFields.data;

  const resEmailSettings = await axios({
    method: "GET",
    params: { key: context.query.key },
    url: `${globalVars.serverURL}/emails/email-settings`,
    responseType: "json"
  });

  const dataEmailSettings = await resEmailSettings.data;
  const { username, pass } = await dataEmailSettings;

  return { dataFields, username, pass };
};

export default Settings;
