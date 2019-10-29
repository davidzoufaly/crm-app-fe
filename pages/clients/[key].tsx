import { useState, useEffect, useReducer, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/Header";
import TableBody from "../../components/clients/TableBody";
import UserContext from "../../components/UserContext";
import stringMethods from "../../library/stringMethods";
import globalVars from "../../library/globalVariables";
import TableHead from "../../components/clients/TableHead";
import CreateClient from "../../components/clients/CreateClient";
import EmailForm from "../../components/EmailForm";
import Buttons from "../../components/clients/Buttons";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Table, Typography, Box } from "@material-ui/core";
import TableBodyMui from "@material-ui/core/TableBody";
import languages from "../../library/languages";

const Clients = ({ fieldData, clientData }: any) => {
  const router = useRouter();
  const user = useContext(UserContext);

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
        return state.map(client => (client = { ...client, isChecked: false }));
      default:
        return state;
    }
  }, clientData);

  const [sort, setSort] = useState({
    sortBy: "First name",
    reverse: true
  });

  const [initialized, setInitialized] = useState(false);
  const [isClientAdded, setIsClientAdded] = useState(false);
  const [isEmailCreated, setIsEmailCreated] = useState(false);

  useEffect(() => {
    // set page title
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

  useEffect(() => {
    // reset email state, when user uncheck all recievers / clients
    filterCheckedClients().length === 0 && isEmailCreated
      ? setIsEmailCreated(!isEmailCreated)
      : null;
  }, [clients]);

  // create H1
  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .removeSlashAndTextAfter()
    .firstCharUpperCase()
    .getString();

  const sortBy = fieldName => {
    setSort({
      ...sort,
      sortBy: fieldName,
      reverse:
        fieldName === sort.sortBy
          ? // if clicked again on same field -> reverse sort based on current reverse state
            !sort.reverse
            ? true
            : false
          : // if new field being clicked -> set reverse true to immediately sort column ASC
            true
    });
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

  const unCheckAll = () => {
    setClients({ type: "unCheckAll" });
  };

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
      method: "DELETE",
      data: filterCheckedClients().map(e => e._id),
      url: `${globalVars.serverURL}/clients/`,
      params: { key: user.user.userkey },
      responseType: "json"
    });
  };

  return !user.user.signedIn && !initialized ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <Typography component="h1" variant="h3">
        {h1}
      </Typography>
      <Typography variant="h5" gutterBottom style={{color: "#535658"}}>
        {languages.en.saved} {clients.length}
      </Typography>
      <EmailForm
        to={filterCheckedClients().map(e => e["Email"])}
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
      <Box width="1" overflow="auto">
        <Table
          aria-label="clients table"
          size="small"
          style={{ backgroundColor: "white", border: "1px solid #e0e0e0" }}
        >
          <TableHead fields={fieldData} sortBy={sortBy} sort={sort} />
          <TableBodyMui>
            <TableBody
              clients={clients}
              fields={fieldData}
              sort={sort}
              handleCheckbox={handleCheckbox}
            />
          </TableBodyMui>
        </Table>
      </Box>
    </div>
  );
};

Clients.getInitialProps = async (context: any) => {
  //fetch clients
  const clientRes = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/clients/`,
    params: { key: context.query.key },
    responseType: "json"
  });
  const clientData = await clientRes.data;

  //fetch fields
  const fieldRes = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/fields`,
    params: { key: context.query.key },
    responseType: "json"
  });
  const fieldData = await fieldRes.data;

  //? fetch clients counter -> unsued takes number from main clients
  // const resClientCount = await axios(
  //   `${globalVars.serverURL}/clients/count?key=${context.query.key}`
  // );
  // const clientCount = await resClientCount.data

  return {
    clientData,
    fieldData
  };
};

export default Clients;
