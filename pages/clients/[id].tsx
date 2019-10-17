import Header from "../../components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import globalVars from "../../library/globalVariables";
import SingleClientData from "../../components/SingleClientData";
import ButtonsSingle from "../../components/singleClient/ButtonsSingle";

//TODO: SKRÝVÁNÍ POLÍ CO NEJSOU V DB

const Client = ({ clientData, fieldsData }: any) => {
  const [client, setClient] = useState(clientData);
  const { firstName, lastName } = clientData;
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.title = `${firstName} ${lastName} ${globalVars.titleSubText}`;
    // console.log(clientData);
    // console.log(fieldsData)
    setInitialized(true);
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const clientSaveRes = await axios({
      method: "post",
      data: client,
      url: `${globalVars.serverURL}/client/${router.query}`,
      responseType: "json"
    });
    const clientSaveData = await clientSaveRes.data;

    clientSaveData.msg === "Success"
      ? router.push(router.pathname)
      : console.error("Something went wrong!");
  };

  const onInputChange = e => {
    setClient({
      ...client,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  };

  return !initialized ? (
    "Loading..."
  ) : (
    <div>
      <Header />
      <h1>
        {firstName} {lastName}
      </h1>
      <form onSubmit={onSubmit}>
        <ul>
          <SingleClientData
            fieldsData={fieldsData}
            client={client}
            onInputChange={onInputChange}
          />
        </ul>
      </form>
      <ButtonsSingle />
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
