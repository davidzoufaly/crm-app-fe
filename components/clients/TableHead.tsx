import uniqid from "uniqid";
import languages from "../../library/languages";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Button, TableCell, Typography } from "@material-ui/core";

interface IProps {
  sortBy: any;
  fields: any;
  sort: any;
}

const TableHeader = ({ fields, sortBy, sort }: IProps) => {
  const tableHeadings = fields.map((e: any) => {
    return (
      <TableCell key={uniqid()}>
        <Button
          onClick={() => sortBy(e.fieldName)}
          startIcon={
            <KeyboardArrowDownIcon color={sort.sortBy === e.fieldName ? "secondary" : "primary"}
              style={
                sort.reverse && sort.sortBy === e.fieldName
                  ? { transform: "rotate(180deg)" }
                  : null
              }
            />
          }
        >
          {e.fieldName}
        </Button>
      </TableCell>
    );
  });

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {tableHeadings}
        <TableCell>
          <Typography variant="button">{languages.en.clientProfile}</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
