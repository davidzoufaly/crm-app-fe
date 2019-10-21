import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import languages from "../../library/languages";
import globalVars from "../../library/globalVariables";
import Header from "../../components/Header";
import SingleClientData from "../../components/singleClient/SingleClientData";
import ButtonsSingle from "../../components/singleClient/ButtonsSingle";
import LoadingSpinner from "../../components/LoadingSpinner";
import EmailForm from "../../components/EmailForm";

const Client = ({ clientData, fieldsData }: any) => {
  const [client, setClient] = useState(clientData);
  const [name, setName] = useState(
    `${clientData["First name"]} ${clientData["Last name"]}`
  );
  const [initialized, setInitialized] = useState(false);
  const [isEmailCreated, setIsEmailCreated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.title = `${name} ${globalVars.titleSubText}`;
    setInitialized(true);
    saveToDb();
  }, [name]);

  const onSave = async e => {
    e.preventDefault();
    setClient({...client, lastModified: moment().format("llll")})
    setName(`${client["First name"]} ${client["Last name"]}`);
  };

  const saveToDb = async () => {
    await axios({
      method: "put",
      data: client,
      url: `${globalVars.serverURL}/clients/${router.query.id}`,
      responseType: "json"
    });
  }

  const onDelete = async e => {
    e.preventDefault();
    const res = await axios({
      method: "delete",
      url: `${globalVars.serverURL}/clients/${router.query.id}`,
      responseType: "json"
    });
    const data = await res.data;
    (await data.msg) === "Success"
      ? router.push("/clients")
      : alert(languages.en.somethingWentWrong);
  };

  const onInputChange = e => {
    setClient({
      ...client,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  };

  const toggleIsEmailCreated = () => {
    setIsEmailCreated(isEmailCreated ? false : true);
  };

  return !initialized ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <h1>{name}</h1>
      <form>
        <SingleClientData
          fieldsData={fieldsData}
          client={client}
          onInputChange={onInputChange}
        />
      </form>
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
  const { id } = context.query;
  const resClient = await axios({
    method: "get",
    url: `${globalVars.serverURL}/clients/${id}`,
    responseType: "json"
  });
  const clientData = await resClient.data;

  const resFields = await axios({
    method: "get",
    url: `${globalVars.serverURL}/fields`,
    responseType: "json"
  });
  const fieldsData = await resFields.data;

  return { clientData, fieldsData };
};

export default Client;
