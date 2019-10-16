import Header from "../../components/Header";
import axios from "axios";
import { useEffect } from "react";
import stringMethods from "../../library/stringMethods";
import globalVars from "../../library/globalVariables";

//TODO: SKRÝVÁNÍ POLÍ CO NEJSOU V DB

const Client = (props: any) => {
  const { firstName, lastName } = props.data;

  useEffect(() => {
    document.title = `${name} ${globalVars.titleSubText}`;
  });

  const showAllProperities = () => {
    const data = props.data;
    const list = [];
    for (let key in data) {
      const convertedKey = new stringMethods(key)
        .camelStringToText()
        .firstCharUpperCase()
        .getString();
   
      if (key !== "_id" && key !== "name") {
        list.push(
          <li key={key}>
            {convertedKey}: {data[key]}
          </li>
        );
      }
    }
    return list;
  };

  return (
    <div>
      <Header />
      <h1>{firstName} {lastName}</h1>
      <ul>{showAllProperities()}</ul>
    </div>
  );
};

Client.getInitialProps = async (context: any) => {
  const { id } = context.query;
  const res = await axios({
    method: "get",
    url: `${globalVars.serverURL}/clients/${id}`,
    responseType: "json"
  });
  const data = await res.data;
  return { data };
};

export default Client;
