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
  const [fields, setField] = useState(data);
  const [headingOne, setHeadingOne] = useState("");
  const [initialized, setInitialized] = useState(false);

  const deleteField = async (event : any) => {
    const id = event.target.id;
    const res = await axios({
        method: "delete",
        url:`${globalVars.serverURL}/fields/${id}`,
        responseType: "json"
    })
    const data = await res.data;
    data.msg === "Success" ? setField(fields.filter((e : any) => e._id !== id)) : null;
  }

  useEffect(() => {
    setHeadingOne(
      new stringMethods(router.pathname)
        .removeSlash()
        .firstCharUpperCase()
        .getString()
    );

    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();

    document.title = title;

    setInitialized(true);
  });

  if (!initialized) {
    return "Loading...";
  }
  return (
    <div>
      <Header />
      <h1>{headingOne}</h1>
      <DefaultClientFields fields={fields}/>
      <CustomClientFields fields={fields} deleteField={deleteField}/>
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
