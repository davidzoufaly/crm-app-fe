import { useContext } from "react";
import Link from "next/link";
import uniqid from "uniqid";
import UserContext from "../UserContext";
import languages from "../../library/languages";
import PersonIcon from '@material-ui/icons/Person';
import {TableCell, TableRow, Checkbox, Button } from '@material-ui/core';

const TableBody = ({ clients, sort, fields, handleCheckbox }: any) => {
  const { sortBy, reverse } = sort;
  const user = useContext(UserContext);
  // field we want to filter is type number -> return true and filter it correctly -> 23 > 4
  if (fields.some(e => e.fieldName === sortBy && e.fieldType === "number")) {
    clients.sort((a: any, b: any) =>
      reverse ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]
    );
  } else {
    clients.sort((a: any, b: any) =>
      reverse
        ? b[sortBy] > a[sortBy]
          ? -1
          : 1
        : b[sortBy] < a[sortBy]
        ? -1
        : 1
    );
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
      // add put checkbox at first position
      items.unshift(
        <TableCell padding="checkbox" key={uniqid()}>
        <Checkbox
        color="primary"
        checked={!!client.isChecked || client.isChecked}
        onChange={() => handleCheckbox(client._id)}
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      </TableCell>
      );
      // add put profile link at last position
      items.push(
        <TableCell key={uniqid()}>
          <Link
            href={`/client/[id]/?key=${user.user.userkey}`}
            as={`/client/${client._id}/?key=${user.user.userkey}`}
          >
            <Button startIcon={<PersonIcon/>}>{languages.en.go}</Button>
          </Link>
        </TableCell>
      );

      items = items.map(e =>
        !!!e ? <TableCell key={uniqid()}></TableCell> : e
      );

      return items;
    };

    return <TableRow key={client._id} hover={true}>{tableItem()}</TableRow>;
  });
  return tableClients;
};

export default TableBody;
