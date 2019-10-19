import Link from "next/link";
import uniqid from "uniqid";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

//TODO Filtrují se i polé které neexistujou na straně body

interface IProps {
  clients: any;
  reverse: boolean;
  sort: string;
  fields: any;
  handleCheckbox: any;
}

const TableBody = ({
  clients,
  reverse,
  sort,
  fields,
  handleCheckbox
}: IProps) => {
  if (fields.some(e => e.fieldName === sort && e.fieldType === "number")) {
    if (reverse) {
      clients.sort((a: any, b: any) => b[sort] - a[sort]);
    } else {
      clients.sort((a: any, b: any) => a[sort] - b[sort]);
    }
  } else {
    if (reverse) {
      clients.sort((a: any, b: any) => (b[sort] > a[sort] ? -1 : 1));
    } else {
      clients.sort((a: any, b: any) => (b[sort] < a[sort] ? -1 : 1));
    }
  }

  const fieldNames = [];
  fields.forEach((e: any) => fieldNames.push(e.fieldName));

  const tableClients = clients.map((client: any) => {
    let items = [];

    for (let i = 0; i < fieldNames.length; i++) {
      items[i] = null;
    }

    const tableItem = () => {
      for (let key in client) {
        //show only clients data with existing fields
        if (client[key] !== client._id && fieldNames.includes(key)) {
          items[fieldNames.indexOf(key)] = (
            <TableCell key={uniqid()}>{client[key]}</TableCell>
          );
        }
      }
      // add checkbox at first position
      items.unshift(
        <TableCell padding="checkbox" key={uniqid()}>
          <input
            type="checkbox"
            checked={client.isChecked === undefined ? false : client.isChecked}
            onChange={() => handleCheckbox(client._id)}
          />
        </TableCell>
      );
      // add profile link at last position
      items.push(
        <TableCell key={uniqid()}>
          <Link href="/clients/[id]" as={`/clients/${client._id}`}>
            <a>Go</a>
          </Link>
        </TableCell>
      );

      items = items.map(e => (e === null ?  <TableCell key={uniqid()}></TableCell> : e));

      return items;
    };

    return <TableRow key={client._id}>{tableItem()}</TableRow>;
  });
  return tableClients;
};

export default TableBody;
