
import Link from 'next/link';

interface IProps {
    clients: any,
    reverse: boolean
    sort: string
  }

const ClientsList = ({clients, reverse, sort} : IProps) => {
    
    reverse ? clients.sort((a : any, b : any) => b[sort] > a[sort] ? 1 : -1) : clients.sort((a : any, b : any) => b[sort] > a[sort] ? -1 : 1);

    const tableClients = clients.map((e:any) => (
      <tr key={e._id}>
        <td>{e.dateAdded}</td>
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
    return tableClients;
  };

  export default ClientsList;