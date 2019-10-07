import { useState, useEffect } from "react";
import axios from "axios";

const Index = (props: any) => {
  const [clients, setClient] = useState([{_id:"ff", name:"ffff"}]);

  useEffect(() => {
    setClient(props.data);

    const mapClients = () => {
        const listOfClients = clients.map(e => {
          <li key={e._id}>{e.name}</li>;
        });
        return listOfClients;
    };
    const clientList = mapClients();
    return clientList;
  })


  return (
    <div>
      <h1>hiii</h1>
      <ul>{clientList}</ul>
      <ul>
        {clients.map(e => e.name)}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("http://localhost:8080/api/clients");
  const data = await res.data;
  return {
    data
  };
};

export default Index;
