import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../components/UserContext";
import DefaultFieldsSection from "../../components/settings/DefaultFieldsSection";
import CustomFieldsSection from "../../components/settings/customFields/CustomFieldsSection";
import LoadingSpinner from "../../components/LoadingSpinner";
import EmailSettingsSection from "../../components/settings/emailSettings/EmailSettingsSection";
import WebFormSection from "../../components/settings/webform/WebFormSection";
import globalVars from "../../library/globalVariables";
import stringMethods from "../../library/stringMethods";
import Typography from "@material-ui/core/Typography";

const Settings = ({ dataFields, username, pass }: any) => {
  const router = useRouter();
  const [fields, setField] = useState(dataFields);
  const [initialized, setInitialized] = useState(false);
  const [sections, setSection] = useState({});
  const user = useContext(UserContext);

  const toggleSection = e => {
    setSection({
      ...sections,
      [e.target.name]: e.target.checked
    });
  };

  const addField = obj => {
    setField(
      fields.some(field => field._id === obj._id)
        ? fields.map(field => (field._id === obj._id ? obj : field))
        : [...fields, obj]
    );
  };

  const removeField = id => {
    setField(
      fields.filter(field => field._id !== id)
    )
  }

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
        fields={fields}
        toggleSection={toggleSection}
        sections={sections}
      />
      <CustomFieldsSection
        fields={fields}
        removeField={removeField}
        addField={addField}
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
        fields={fields}
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
