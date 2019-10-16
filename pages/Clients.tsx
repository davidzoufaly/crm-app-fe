import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import TableBody from "../components/clientTable/TableBody";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";
import TableHead from "../components/clientTable/TableHead";
import CreateClient from "../components/CreateClient";
import Button from "@material-ui/core/Button";

const Clients = ({ fieldData, clientData }: any) => {
  const router = useRouter();

  const [clients, setClients] = useState(clientData);
  //TODO: SPOJIT DO JEDNOHO STATU
  const [reverse, setReverseOrder] = useState(false);
  const [sort, setSortBy] = useState("firstName");
  //
  const [headingOne, setHeadingOne] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [isClientAdded, setIsClientAdded] = useState(false);

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

  const refreshList = async () => {
    //get data from DB after change
    const res = await axios({
      method: "get",
      url: `${globalVars.serverURL}/clients/`,
      responseType: "json"
    });
    const data = await res.data;
    setClients(data);
  }

  const sortBy = (fieldName) => {
    setSortBy(fieldName);
    !reverse ? setReverseOrder(true) : setReverseOrder(false);
  }

  const toggleIsClientAdded = () => {
    isClientAdded ? setIsClientAdded(false) : setIsClientAdded(true);
  }

  if (!initialized) {
    return "Loading";
  }
  return (
    <div>
      <Header />
      <h1>{headingOne}</h1>
      <Button variant="contained" color="primary" onClick={() => setIsClientAdded(true)}>
      Add new client
      </Button>
      <CreateClient fields={fieldData} isClientAdded={isClientAdded} toggleIsClientAdded={toggleIsClientAdded} refreshList={refreshList} />
      <table>
          <TableHead fields={fieldData} sortBy={sortBy} reverse={reverse}/>
          <tbody>
          <TableBody clients={clients} fields={fieldData} sort={sort} reverse={reverse}/>
          </tbody>
      </table>

    </div>
  );
};

Clients.getInitialProps = async () => {
  const clientRes = await axios({
    method: "get",
    url: `${globalVars.serverURL}/clients`,
    responseType: "json"
  });
  const clientData = await clientRes.data;

  const fieldRes = await axios({
    method: "get",
    url: `${globalVars.serverURL}/fields`,
    responseType: "json"
  })
  const fieldData = await fieldRes.data

  return {
    clientData, fieldData
  };
};

export default Clients;
