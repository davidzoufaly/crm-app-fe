import Link from "next/link";
import uniqid from "uniqid";

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
  fields.forEach((e: any) => fieldNames.push(e.fieldName, e.fieldType));

  const tableClients = clients.map((e: any) => {
    const tableItem = () => {
      let items = [];

      for (let key in e) {
        //show only clients data with existing fields
        e[key] !== e._id && fieldNames.includes(key)
          ? items.push(<td key={uniqid()}>{e[key]}</td>)
          : null;
      }
      // add checkbox at first position
      items.unshift(
        <td key={uniqid()}>
          <input
            type="checkbox"
            checked={e.isChecked === undefined ? false : e.isChecked}
            onChange={() => handleCheckbox(e._id)}
          />
        </td>
      );
      // add profile link at last position
      items.push(
        <td key={uniqid()}><Link href="/clients/[id]" as={`/clients/${e._id}`}>
          <a>Go</a>
        </Link></td>
      );
      return items;
    };

    return (
      <tr key={e._id}>
        {tableItem()}
      </tr>
    );
  });
  return tableClients;
};

export default TableBody;
