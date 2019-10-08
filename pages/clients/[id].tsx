import Header from '../../components/Header';
import axios from 'axios';

const Client = (props : any) => {
    return (
        <div>
            <Header/>
            <h1>{props.data.name}</h1>
            
            <p>Age: {props.data.age}</p>  
            <p>Address: {props.data.address}</p>

        </div>
    )
}

Client.getInitialProps = async (context : any) => {
    const { id } = context.query;
    const res = await axios({
        method: "get",
        url: `http://localhost:8080/api/clients/${id}`,
        responseType: "json",
    }) 
    const data = await res.data;
    return { data };
}

export default Client;