import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/Header";
import ShowRecordsNumber from "../../components/dashboard/ShowRecordsNumber";
import LoadingSpinner from "../../components/LoadingSpinner";
import UserContext from "../../components/UserContext";
import globalVars from "../../library/globalVariables";
import stringMethods from "../../library/stringMethods";
import languages from "../../library/languages";
import { Typography, Grid } from "@material-ui/core";

const Dashboard = ({
  lastCampaign,
  clientsLastWeek,
  clientCounter,
  fieldCounter,
  emailsCounter
}: any) => {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);
  const user = useContext(UserContext);

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .removeSlashAndTextAfter()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
  }, [router]);

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .removeSlashAndTextAfter()
    .firstCharUpperCase()
    .getString();

  const campaignStr =
    lastCampaign.length > 0
      ? `${languages.en.last} ${languages.en.sent} ${
          lastCampaign[0].date
        } ${languages.en.to.toLowerCase()} ${lastCampaign[0].to.length} ${
          lastCampaign[0].to.length > 1
            ? languages.en.clients
            : languages.en.client
        }`
      : "";

  const lastWeekStr = `${clientsLastWeek > 0 ? "+" : ""} ${clientsLastWeek} ${
    languages.en.pastSevenDays
  }`;
  return !initialized && !user.user.signedIn ? (
    <LoadingSpinner />
  ) : (
    <>
      <Header />
      <Typography component="h1" variant="h3" gutterBottom>
        {h1}
      </Typography>
      <Grid container justify="space-around" alignItems="stretch" spacing={4}>
        <Grid item xs={12} md={4}>
          <ShowRecordsNumber
            data={clientCounter}
            string={languages.en.clientsSaved}
            buttonString={languages.en.clients}
            subData={lastWeekStr}
            link={"/clients"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ShowRecordsNumber
            data={fieldCounter.custom}
            string={languages.en.customClientFields}
            buttonString={languages.en.customClientFields}
            subData={`${fieldCounter.permanent + fieldCounter.custom} ${
              languages.en.total
            }`}
            link={"/settings"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ShowRecordsNumber
            data={emailsCounter}
            string={languages.en.emailsSent}
            buttonString={languages.en.emails}
            subData={campaignStr}
            link={"/emails"}
          />
        </Grid>
      </Grid>
    </>
  );
};

Dashboard.getInitialProps = async context => {
  const resLastCampaign = await axios(
    `${globalVars.serverURL}/emails/last?key=${context.query.key}`
  );

  const resLastWeekNumber = await axios(
    `${globalVars.serverURL}/clients/last-week?key=${context.query.key}`
  );

  const resClientCount = await axios(
    `${globalVars.serverURL}/clients/count?key=${context.query.key}`
  );

  const resFieldsData = await axios(
    `${globalVars.serverURL}/fields/count?key=${context.query.key}`
  );

  const resEmailsCount = await axios(
    `${globalVars.serverURL}/emails/count?key=${context.query.key}`
  );

  const lastCampaign = await resLastCampaign.data;
  const clientsLastWeek = await resLastWeekNumber.data;
  const clientCounter = await resClientCount.data;
  const fieldCounter = await resFieldsData.data;
  const emailsCounter = await resEmailsCount.data;

  return {
    lastCampaign,
    clientsLastWeek,
    clientCounter,
    fieldCounter,
    emailsCounter
  };
};

export default Dashboard;
