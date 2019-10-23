import { useEffect, useState, createContext } from "react";

import axios from "axios";
import globalVars from "../library/globalVariables";

const CountContext = (props) => {
    const [count, setCount] = useState({});
    const Context = createContext(count);

    useEffect(() => {
        const getCounts = async () => {
            const resClientCount = await axios({
                method: "GET",
                url: `${globalVars.serverURL}/clients/count`,
                responseType: "json"
              });
              const clientData = await resClientCount.data;
            
              const resFieldsData = await axios({
                method: "GET",
                url: `${globalVars.serverURL}/fields/count`,
                responseType: "json"
              });
              const fieldData = await resFieldsData.data;
            
              const resEmailsCount = await axios({
                method: "GET",
                url: `${globalVars.serverURL}/emails/count`,
                responseType: "json"
              })
              const emailsData = await resEmailsCount.data;

              setCount({
                  clientData,
                  fieldData,
                  emailsData
              })
        } 
        getCounts();
    }, [])

    return (
        <Context.Provider value={count}>
            {props.children}
        </Context.Provider>
    )
}

export default CountContext;