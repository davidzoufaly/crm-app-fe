import Header from "../../components/Header";
import axios from "axios";
import { useEffect } from "react";
import stringMethods from "../../functions/stringMethods";

//TODO: SKRÝVÁNÍ POLÍ CO NEJSOU V DB

const Client = (props: any) => {
  const { name } = props.data;

  useEffect(() => {
    document.title = `${name} | CRM-APP`;
  });

  const fce = () => {
    const data = props.data;
    const list = [];
    for (let key in data) {
      const convertedKey = new stringMethods(key)
        .getIndexUpperCase()
        .splitStringByIndex()
        .firstCharUpperCase();
   
      if (key !== "_id" && key !== "name") {
        list.push(
          <li key={key}>
            {convertedKey.text}: {data[key]}
          </li>
        );
      }
    }
    return list;
  };

  return (
    <div>
      <Header />
      <h1>{name}</h1>
      <ul>{fce()}</ul>
    </div>
  );
};

Client.getInitialProps = async (context: any) => {
  const { id } = context.query;
  const res = await axios({
    method: "get",
    url: `http://localhost:8080/api/clients/${id}`,
    responseType: "json"
  });
  const data = await res.data;
  return { data };
};

export default Client;
