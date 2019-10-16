import Header from "../components/Header";
import { useRouter } from "next/router";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";
import axios from "axios";
import { useState, useEffect } from "react";
import DefaultFields from "../components/DefaultFields";
import CustomFields from "../components/CustomFields";
import Typography from "@material-ui/core/Typography";

const Settings = ({ data }: any) => {
  const router = useRouter();
  const [fields, setField] = useState(data);
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
  }

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
  });

  const h1 = new stringMethods(router.pathname)
  .removeSlash()
  .firstCharUpperCase()
  .getString()

  if (!initialized) {
    return "Loading...";
  }

  return (
    <div>
      <Header />
      <Typography variant="h3" component="h1" gutterBottom>{h1}</Typography>
      <DefaultFields fields={fields}/>
      <CustomFields fields={fields} refreshList={refreshList}/>
    </div>
  );
};

Settings.getInitialProps = async () => {
  const res = await axios({
    method: "get",
    url: `${globalVars.serverURL}/fields`,
    responseType: "json"
  });
  const data = await res.data;
  return { data };
};

export default Settings;
