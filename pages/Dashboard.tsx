import Header from '../components/Header';
import ShowRecordsNumber from '../components/ShowRecordsNumber';
import axios from 'axios';
import stringMethods from "../functions/stringMethods";
import { useEffect } from "react";
import { useRouter } from "next/router";


const Dashboard = (props: any) => {
  const router = useRouter();

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd("| CRM-APP");
    document.title = title.text;
  }, [router]);


  return (
    <div>
      <Header/>
      <h1>CRM-APP dashboard</h1>
      <ShowRecordsNumber data={props.data} />
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const res = await axios({
      method: "get",
      url: "http://localhost:8080/api/clients/count",
      responseType: "json"
    });
    const data = await res.data;
    return {
      data
    };
};

export default Dashboard;
