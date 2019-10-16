import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShowRecordsNumber from "../components/RecordsNumber";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";

const Dashboard = ({clientData, fieldData} : any) => {
  const router = useRouter();
  const [headingOne, setHeadingOne] = useState("");
  const [initialized, setInitialized] = useState(false);

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
      <ShowRecordsNumber data={clientData.data} string={"clients"} />
      <ShowRecordsNumber data={fieldData.data} string={"fields"}/>
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const resClientCount = await axios({
    method: "get",
    url: `${globalVars.serverURL}/clients/count`,
    responseType: "json"
  });
  const clientData = await resClientCount.data;

  const resFieldsData = await axios({
    method: "get",
    url: `${globalVars.serverURL}/fields/count`,
    responseType: "json"
  });
  const fieldData = await resFieldsData.data;
  return { clientData, fieldData };
};

export default Dashboard;
