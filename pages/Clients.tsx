import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import TableBody from "../components/clients/TableBody";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";
import TableHead from "../components/clients/TableHead";
import CreateClient from "../components/clients/CreateClient";
import Buttons from "../components/clients/Buttons";
import LoadingSpinner from "../components/loadingSpinner";
import EmailForm from "../components/EmailForm";

//TODO: Po odeslání skrýt komponentu

const Clients = ({ fieldData, clientData }: any) => {
  const router = useRouter();

  const [clients, setClients] = useReducer((state, action) => {
    switch (action.type) {
      case "handleCheckedClients":
        return state.map(client =>
          client._id === action.payload.id
            ? client.isChecked === false || client.isChecked === undefined
              ? { ...client, isChecked: true }
              : { ...client, isChecked: false }
            : client
        );
      case "addClient":
        return [...state, action.payload.newClient];
      case "deleteCheckedClients":
        return state.filter(client => !client.isChecked);
      case "unCheckAll": 
        return state.map(client => client = {...client, isChecked: false});
      default:
        return state;
    }
  }, clientData);
  //TODO: SPOJIT DO JEDNOHO STATU
  const [reverse, setReverseOrder] = useState(false);
  const [sort, setSortBy] = useState("firstName");
  //
  const [initialized, setInitialized] = useState(false);
  const [isClientAdded, setIsClientAdded] = useState(false);
  const [isEmailCreated, setIsEmailCreated] = useState(false);

  useEffect(() => {
    // set title
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    setInitialized(true);
  }, []);

  useEffect(() => {
    // reset email state, when user uncheck all recievers / clients
    filterCheckedClients().length === 0 && isEmailCreated
      ? setIsEmailCreated(!isEmailCreated)
      : null;
  }, [clients]);

  // create H1
  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .firstCharUpperCase()
    .getString();

  const sortBy = fieldName => {
    setSortBy(fieldName);
    !reverse ? setReverseOrder(true) : setReverseOrder(false);
  };

  const handleCheckbox = id => {
    setClients({
      type: "handleCheckedClients",
      payload: { id }
    });
  };

  const addNewClientToState = newClient => {
    setClients({
      type: "addClient",
      payload: { newClient }
    });
  };

  const filterCheckedClients = () => clients.filter(client => client.isChecked);

  const unCheckAll = () => {
    setClients({type: "unCheckAll"})
  }

  const toggleIsEmailCreated = () => {
    setIsEmailCreated(isEmailCreated ? false : true);
  };

  const toggleIsClientAdded = () => { 
    isClientAdded ? setIsClientAdded(false) : setIsClientAdded(true);
  };

  const deleteMultipleClients = async () => {
    setClients({
      type: "deleteCheckedClients"
    });

    await axios({
      method: "delete",
      data: filterCheckedClients().map(e => e._id),
      url: `${globalVars.serverURL}/clients/`,
      responseType: "json"
    });
  };

  return !initialized ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <h1>{h1}</h1>
      <EmailForm
        to={filterCheckedClients().map(e => e.email)}
        isEmailCreated={isEmailCreated}
        toggleIsEmailCreated={toggleIsEmailCreated}
        unCheckAll={unCheckAll}
      />
      <CreateClient
        fields={fieldData}
        isClientAdded={isClientAdded}
        toggleIsClientAdded={toggleIsClientAdded}
        addNewClientToState={addNewClientToState}
      />
      <Buttons
        clientsAreNotChecked={!clients.some(client => client.isChecked)}
        deleteMultipleClients={deleteMultipleClients}
        toggleIsClientAdded={toggleIsClientAdded}
        isClientAdded={isClientAdded}
        toggleIsEmailCreated={toggleIsEmailCreated}
        isEmailCreated={isEmailCreated}
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
