import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import moment from "moment";
import axios from "axios";
import Header from "../../components/Header";
import SingleClientData from "../../components/singleClient/SingleClientData";
import ButtonsSingle from "../../components/singleClient/ButtonsSingle";
import LoadingSpinner from "../../components/LoadingSpinner";
import UserContext from "../../components/UserContext";
import EmailForm from "../../components/EmailForm";
import languages from "../../library/languages";
import globalVars from "../../library/globalVariables";
import { Typography, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boxWrapper: {
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    }
  })
);

const Client = ({ clientData, fieldsData }: any) => {
  const classes = useStyles({});
  const [client, setClient] = useState(clientData);
  const [name, setName] = useState(
    `${clientData["First name"]} ${clientData["Last name"]}`
  );

  const user = useContext(UserContext);
  const [initialized, setInitialized] = useState(false);
  const [isEmailCreated, setIsEmailCreated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.title = `${name} ${globalVars.titleSubText}`;
    setInitialized(true);
  }, [name]);

  useEffect(() => {
    user.checkUser();
  }, [])

  const onSave = async e => {
    e.preventDefault();
    setName(`${client["First name"]} ${client["Last name"]}`);
    saveToDb();
  };

  const saveToDb = async () => {
    await axios({
      method: "put",
      url: `${globalVars.serverURL}/clients/${router.query.key}/${router.query.id}`,
      data: client,
      responseType: "json"
    });
  }

  const onDelete = async e => {
    e.preventDefault();
    const res = await axios({
      method: "delete",
      url: `${globalVars.serverURL}/clients/${router.query.key}/${router.query.id}`,
      responseType: "json"
    });
    const data = await res.data;
    (await data.msg) === "Success"
      ? router.push(`/clients/${router.query.key}`)
      : alert(languages.en.somethingWentWrong);
  };

  const onInputChange = e => {
    setClient({
      ...client, 
      ["Last modified"]: moment().format("llll"),
      [e.target.name as string]: e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  };

  const toggleIsEmailCreated = () => {
    setIsEmailCreated(isEmailCreated ? false : true);
  };

  return !user.user.signedIn && !initialized ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <Typography component="h1" variant="h3" gutterBottom>{name}</Typography>
      <Box mb="1rem" maxWidth="100" className={classes.boxWrapper}>
      <form>
        <SingleClientData
          fieldsData={fieldsData}
          client={client}
          onInputChange={onInputChange}
        />
      </form>
      </Box>
        <EmailForm
          to={[client["Email"]]}
          isEmailCreated={isEmailCreated}
          toggleIsEmailCreated={toggleIsEmailCreated}
        />
        <ButtonsSingle
          onSave={onSave}
          toggleIsEmailCreated={toggleIsEmailCreated}
          onDelete={onDelete}
          isEmailCreated={isEmailCreated}
        />
    </div>
  );
};

Client.getInitialProps = async (context: any) => {
  const resClient = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/clients/${context.query.key}/${context.query.id}`,
    responseType: "json"
  });
  const clientData = await resClient.data;

  const resFields = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/fields`,
    params: {key: context.query.key},
    responseType: "json"
  });
  const fieldsData = await resFields.data;

  return { clientData, fieldsData };
};

export default Client;

