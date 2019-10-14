import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import ClientsList from "../components/ClientList";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";


//TODO: TABULKA DYNAMICKÉ ZÁHLAVÍ
//TODO: PŘIDAT NOVÉHO KLIENTA


const Clients = ({ data }: any) => {
  const router = useRouter();

  const [clients] = useState(data);
  const [reverse, setReverseOrder] = useState(false);
  const [sort, setSortBy] = useState("dateAdded");
  const [headingOne, setHeadingOne] = useState("");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setHeadingOne(
      new stringMethods(router.pathname)
        .removeSlash()
        .firstCharUpperCase()
        .getString()
    );
  })

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;

    setInitialized(true);
  });

  const sortBy = () => {
    setSortBy("age");
    reverse === false ? setReverseOrder(true) : setReverseOrder(false);
  }

  if (!initialized) {
    return "Loading";
  }
  return (
    <div>
      <Header />
      <h1>{headingOne}</h1>
      <table>
        <thead>
          <tr>
            <th><button>Date Added</button></th>
            <th><button>Name</button></th>
            <th><button onClick={sortBy}>Age</button></th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <ClientsList clients={clients} sort={sort} reverse={reverse}/>
        </tbody>
      </table>
    </div>
  );
};

Clients.getInitialProps = async () => {
  const res = await axios({
    method: "get",
    url: `${globalVars.serverURL}/clients`,
    responseType: "json"
  });
  const data = await res.data;
  return {
    data
  };
};

export default Clients;
