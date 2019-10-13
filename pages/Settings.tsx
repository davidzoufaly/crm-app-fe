import Header from "../components/Header";
import { useRouter } from "next/router";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";
import axios from "axios";
import { useState, useEffect } from "react";
import DefaultClientFields from "../components/DefaultClientFields";
import CustomClientFields from "../components/CustomClientFields";

const Settings = ({ data }: any) => {
  const router = useRouter();
  const [fields, setField] = useState([]);
  const [headingOne, setHeadingOne] = useState("");

  useEffect(() => {
    setField(data);
    setHeadingOne(
      new stringMethods(router.pathname)
        .removeSlash()
        .firstCharUpperCase()
        .getString()
    );
  });

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();

    document.title = title;
  }, [router]);

  if (fields.length === 0) {
    return "Loading...";
  }
  return (
    <div>
      <Header />
      <h1>{headingOne}</h1>
      <DefaultClientFields fields={fields} />
      <CustomClientFields fields={fields} />
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
