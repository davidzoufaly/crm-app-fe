import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShowRecordsNumber from '../components/RecordsNumber';
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";

const Dashboard = (props: any) => {
  const router = useRouter();
  const [headingOne, setHeadingOne] = useState("");

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
  }, [router]);


  return (
    <div>
      <Header/>
      <h1>{headingOne}</h1>
      <ShowRecordsNumber data={props.data} />
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const res = await axios({
      method: "get",
      url: `${globalVars.serverURL}/clients/count`,
      responseType: "json"
    });
    const data = await res.data;
    return data;
};

export default Dashboard;
