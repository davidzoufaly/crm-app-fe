import StringMethods from "../../library/stringMethods";
import uniqid from "uniqid";

interface IProps {
  sortBy: any;
  fields: any;
  reverse: boolean;
}

//TODO: Reverse šipka jen aktivního záhlaví

const TableHead = ({ fields, sortBy, reverse }: IProps) => {
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
    <thead>
      <tr>
        <th></th>
        {tableHeadings}
        <th>Client Profile</th>
      </tr>
    </thead>
  );
};

export default TableHead;
