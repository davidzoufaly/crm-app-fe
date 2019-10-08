import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Link from "next/link";

//TODO: TABULKA DYNAMICKÉ ZÁHLAVÍ
//TODO: SORTOVÁNÍ

const ClientsList = (props: any) => {
  return props.clients.map(e => (
    <tr key={e._id}>
      <td>{e.name}</td>
      <td>{e.age}</td>
      <td>{e.address}</td>
      <td>
        <Link href="/clients/[id]" as={`/clients/${e._id}`}>
          <a>Go to client</a>
        </Link>
      </td>
    </tr>
  ));
};

const Clients = (props: any) => {
  const [clients, setClient] = useState([]);

  useEffect(() => {
    setClient(props.data);
  });

  if (clients.length === 0) {
    return "Loading";
  }
  return (
    <div>
      <Header />
      <h1>List of all clients</h1>
      <table>
        <thead>
          <th>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
          </th>
        </thead>
        <tbody>
          <ClientsList clients={clients} />
        </tbody>
      </table>
    </div>
  );
};

Clients.getInitialProps = async () => {
  const res = await axios({
    method: "get",
    url: "http://localhost:8080/api/clients",
    responseType: "json"
  });
  const data = await res.data;
  return {
    data
  };
};

export default Clients;
