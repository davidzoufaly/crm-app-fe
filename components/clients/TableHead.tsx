import StringMethods from "../../library/stringMethods";
import TableRow from "@material-ui/core/TableRow";
import TableHead from '@material-ui/core/TableHead';
import uniqid from "uniqid";

interface IProps {
  sortBy: any;
  fields: any;
  reverse: boolean;
}

//TODO: Reverse šipka jen aktivního záhlaví

const TableHeader = ({ fields, sortBy, reverse }: IProps) => {
  const tableHeadings = fields.map((e: any) => {
    const tableHeading = new StringMethods(e.fieldName)
      .camelStringToText()
      .firstCharUpperCase()
      .getString();

    return (
      <th key={uniqid()}>
        {reverse ? "<" : ">"}
        <button onClick={() => sortBy(e.fieldName)}>{tableHeading}</button>
      </th>
    );
  });

  return (
    <TableHead>
      <TableRow>
        <th></th>
        {tableHeadings}
        <th>Client Profile</th>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
