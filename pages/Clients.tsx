import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Header from "../components/Header";
import title from "../functions/title";

//TODO: SORTOVÁNÍ
//TODO: TABULKA DYNAMICKÉ ZÁHLAVÍ
//TODO: PŘIDAT NOVÉHO KLIENTA

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
  const router = useRouter();
  const [clients, setClientList] = useState([]);

  useEffect(() => {
    setClientList(props.data);
  });

  useEffect(() => {
    title(router.pathname);
  }, [router])

  const reverseOrder = () => {
    setClientList(clients.reverse());
  }

  if (clients.length === 0) {
    return "Loading";
  }
  return (
    <div>
      <Header />
      <h1>All clients</h1>
      <table>
        <thead>
          <tr>
            <th><button onClick={reverseOrder}>Name</button></th>
            <th>Age</th>
            <th>Address</th>
          </tr>
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
