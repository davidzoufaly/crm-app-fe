import TableRow from "@material-ui/core/TableRow";
import TableHead from '@material-ui/core/TableHead';
import uniqid from "uniqid";
import languages from "../../library/languages";

interface IProps {
  sortBy: any;
  fields: any;
  reverse: boolean;
}

//TODO: Reverse šipka jen aktivního záhlaví

const TableHeader = ({ fields, sortBy, reverse }: IProps) => {
  const tableHeadings = fields.map((e: any) => {

    return (
      <th key={uniqid()}>
        {reverse ? "<" : ">"}
        <button onClick={() => sortBy(e.fieldName)}>{e.fieldName}</button>
      </th>
    );
  });

  return (
    <TableHead>
      <TableRow>
        <th></th>
        {tableHeadings}
        <th>{languages.en.clientProfile}</th>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
