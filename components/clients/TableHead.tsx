import uniqid from "uniqid";
import languages from "../../library/languages";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Button, TableCell, Typography, Checkbox } from "@material-ui/core";

interface IProps {
  sortBy: any;
  fields: any;
  sort: any;
  handleCheckAll: any;
  allCheck: boolean;
}

const TableHeader = ({ fields, sortBy, sort, handleCheckAll, allCheck }: IProps) => {
  const tableHeadings = fields
  // sort by ID
  .sort((a,b) => b._id > a._id ? -1 : 1)
  // set field permanents first
  .sort((a,b) => (b.fieldPermanent ? 1 : 0) - (a.fieldPermanent ? 1 : 0))
  .map((e: any) => {
    return (
        <TableCell key={uniqid()}>
          <Button
            onClick={() => sortBy(e.fieldName)}
            startIcon={
              <KeyboardArrowDownIcon
                color={sort.sortBy === e.fieldName ? "secondary" : "primary"}
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
        <TableCell key={uniqid()}>
          <Checkbox
            color="primary"
            checked={allCheck}
            onChange={() => handleCheckAll()}
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
        </TableCell>
        {tableHeadings}
        <TableCell>
          <Typography variant="button">{languages.en.clientProfile}</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
