import Header from "../components/Header";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ShowRecordsNumber from "../components/ShowRecordsNumber";
import LoadingSpinner from "../components/LoadingSpinner";
import UserContext from "../components/UserContext";
import CountContext from "../components/CountContext";
import globalVars from "../library/globalVariables";
import stringMethods from "../library/stringMethods";
import languages from "../library/languages";

const Dashboard = ({lastCampaign, clientsLastWeek} : any) => {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);
  const user = useContext(UserContext);

  const { 
    emailsCounter,
    clientCounter, 
    fieldCounter 
  } = useContext(CountContext);

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
  }, [router]);

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .firstCharUpperCase()
    .getString();

  const campaignStr = `${languages.en.last} ${languages.en.sent} ${lastCampaign[0].date} ${languages.en.to.toLowerCase()} ${lastCampaign[0].to.length} ${lastCampaign[0].to.length > 1 ? languages.en.clients : languages.en.client}`

  const lastWeekStr = `${clientsLastWeek > 0 ? "+" : null} ${clientsLastWeek} ${languages.en.lastWeek}`

  return !initialized  && !user.user.signedIn ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <h1>{h1}</h1>
      <ShowRecordsNumber
        data={clientCounter}
        string={languages.en.clientsSaved}
        buttonString={languages.en.clients}
        subData={lastWeekStr}
        link={"/clients"}
      />
      <ShowRecordsNumber
        data={fieldCounter.custom}
        string={languages.en.customClientFields}
        buttonString={languages.en.customClientFields}
        subData={`${fieldCounter.permanent + fieldCounter.custom} ${languages.en.total}`}
        link={"/settings"}
      />
      <ShowRecordsNumber
        data={emailsCounter}
        string={languages.en.emailsSent}
        buttonString={languages.en.emails}
        subData={campaignStr}
        link={"/emails"}
      />
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const resLastCampaign = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/emails/last`,
    responseType: "json"
  }) 
  const lastCampaign = await resLastCampaign.data;

  const resLastWeekNumber = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/clients/last-week`,
    responseType: "json"
  })

  const clientsLastWeek = await resLastWeekNumber.data;
  
  return {lastCampaign, clientsLastWeek};
}

export default Dashboard;
