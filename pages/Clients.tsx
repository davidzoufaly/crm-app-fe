import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import TableBody from "../components/clientTable/TableBody";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";
import TableHead from "../components/clientTable/TableHead";
import CreateClient from "../components/CreateClient";
import Buttons from "../components/clientTable/Buttons";

const Clients = ({ fieldData, clientData }: any) => {
  const router = useRouter();

  const [clients, setClients] = useState(clientData);
  //TODO: SPOJIT DO JEDNOHO STATU
  const [reverse, setReverseOrder] = useState(false);
  const [sort, setSortBy] = useState("firstName");
  //
  const [initialized, setInitialized] = useState(false);
  const [isClientAdded, setIsClientAdded] = useState(false);

  useEffect(() => {
    console.log("render");
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    setInitialized(true);
  });

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .firstCharUpperCase()
    .getString();

  const refreshList = async () => {
    //get data from DB after change
    const res = await axios({
      method: "get",
      url: `${globalVars.serverURL}/clients`,
      responseType: "json"
    });
    const data = await res.data;
    setClients(data);
  };

  const sortBy = fieldName => {
    setSortBy(fieldName);
    !reverse ? setReverseOrder(true) : setReverseOrder(false);
  };

  const toggleIsClientAdded = () => {
    isClientAdded ? setIsClientAdded(false) : setIsClientAdded(true);
  };

  const handleCheckbox = id => {
    setClients(
      clients.map(client => {
        if (client._id === id) {
          return client.isChecked === false || client.isChecked === undefined
            ? { ...client, isChecked: true }
            : { ...client, isChecked: false };
        } else {
          return client;
        }
      })
    );
  };

  const deleteMultipleClients = async () => {
    const clientsToDelete = [];
    clients.map(client =>
      client.isChecked ? clientsToDelete.push(client._id) : null
    );
    const resDelete = await axios({
      method: "delete",
      data: clientsToDelete,
      url: `${globalVars.serverURL}/clients/`,
      responseType: "json"
    });
    const dataDelete = await resDelete.data;
    dataDelete.msg === "Success" ? refreshList() : console.error("Something went wrong!");
  };


  return !initialized ? "Loading..." : (
    <div>
      <Header />
      <h1>{h1}</h1>
      <CreateClient
        fields={fieldData}
        isClientAdded={isClientAdded}
        toggleIsClientAdded={toggleIsClientAdded}
        refreshList={refreshList}
      />
      <Buttons
        disabled={!clients.some(client => client.isChecked)}
        deleteMultipleClients={deleteMultipleClients}
        toggleIsClientAdded={toggleIsClientAdded}
        isClientAdded={isClientAdded}
      />
      <table>
        <TableHead fields={fieldData} sortBy={sortBy} reverse={reverse} />
        <tbody>
          <TableBody
            clients={clients}
            fields={fieldData}
            sort={sort}
            reverse={reverse}
            handleCheckbox={handleCheckbox}
          />
        </tbody>
      </table>
    </div>
  );
};

Clients.getInitialProps = async () => {
  //fetch clients
  const clientRes = await axios({
    method: "get",
    url: `${globalVars.serverURL}/clients`,
    responseType: "json"
  });
  const clientData = await clientRes.data;

  //fetch fields
  const fieldRes = await axios({
    method: "get",
    url: `${globalVars.serverURL}/fields`,
    responseType: "json"
  });
  const fieldData = await fieldRes.data;

  return {
    clientData,
    fieldData
  };
};

export default Clients;
