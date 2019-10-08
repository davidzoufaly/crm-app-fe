import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header';

const Index = (props: any) => {
  const [clients, setClient] = useState([]);

  useEffect(() => {
    setClient(props.data);
  });

  if (clients.length === 0){
    return "Loading";
  }
  return (
    <div>
      <Header/>
      <h1>List of all clients</h1>
      <ul>{clients.map(e => <li key={e._id}>{e.name}, {e.age}, {e.address}</li>)}</ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/clients',
      responseType: 'json'
  })
  const data = await res.data;
  return {
    data
  };
};

export default Index;
