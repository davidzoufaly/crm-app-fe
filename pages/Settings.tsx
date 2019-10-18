import Header from "../components/Header";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";
import axios from "axios";
import DefaultFields from "../components/DefaultFields";
import CustomFields from "../components/CustomFields";
import Typography from "@material-ui/core/Typography";
import LoadingSpinner from "../components/loadingSpinner";
import EmailSettings from "../components/settings/EmailSettings";

const Settings = ({ dataFields, dataEmailSettings }: any) => {
  const router = useRouter();
  const [fields, setField] = useState(dataFields);
  const [initialized, setInitialized] = useState(false);

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
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();

    document.title = title;

    //componendDidMount effect
    setInitialized(true);
  }, []);

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .firstCharUpperCase()
    .getString();

  return !initialized ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <Typography variant="h3" component="h1" gutterBottom>
        {h1}
      </Typography>
      <DefaultFields fields={fields} />
      <CustomFields fields={fields} refreshList={refreshList} />
      <EmailSettings data={dataEmailSettings} />
    </div>
  );
};

Settings.getInitialProps = async () => {
  const resFields = await axios({
    method: "get",
    url: `${globalVars.serverURL}/fields`,
    responseType: "json"
  });
  const dataFields = await resFields.data;

  const resEmailSettings = await axios({
    method: "get",
    url: `${globalVars.serverURL}/emails/email-settings`,
    responseType: "json"
  })

  const dataEmailSettings = await resEmailSettings.data;

  return { dataFields,  dataEmailSettings };
};

export default Settings;
