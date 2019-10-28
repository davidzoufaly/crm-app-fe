import globalVars from "../../library/globalVariables";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Grid
} from "@material-ui/core";

const ClientForm = ({ fields, onChange, newClient }: any) => {
  const inputs = fields.map((e: any) => {
    if (
      e.fieldName !== globalVars.permanentFields.dateAdded &&
      e.fieldName !== globalVars.permanentFields.lastModified
    ) {
      if (e.fieldType === "text") {
        return (
          <Grid item xs={12} sm={6} key={e.fieldName}>
            <TextField
              type="text"
              key={e.fieldName}
              label={e.fieldName}
              id={e.fieldName}
              autoFocus={e.fieldName === globalVars.permanentFields.fistName}
              name={e.fieldName}
              margin="normal"
              fullWidth
              onChange={onChange}
              defaultValue={newClient[e.fieldName]}
            />
          </Grid>
        );
      } else if (e.fieldType === "number") {
        return (
          <Grid item xs={12} sm={6} key={e.fieldName}>
            <TextField
              id={e.fieldName}
              key={e.fieldName}
              label={e.fieldName}
              margin="normal"
              fullWidth
              type="number"
              name={e.fieldName}
              onChange={onChange}
              defaultValue={newClient[e.fieldName]}
            />
          </Grid>
        );
      } else if (e.fieldType === "select") {
        return (
          <Grid item xs={12} sm={6} key={e.fieldName}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor={e.fieldName}>{e.fieldName}</InputLabel>
              <Select
                name={e.fieldName}
                id={e.fieldName}
                onChange={onChange}
                value={newClient[e.fieldName] ? newClient[e.fieldName] : ""}
              >
                <MenuItem value="" key={globalVars.blankOption}>
                  {globalVars.blankOption}
                </MenuItem>
                {e.fieldOptions.map((e: any) => {
                  return (
                    <MenuItem value={e.value} key={e.id}>
                      {e.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        );
      }
    }
  });
  return (
    <Grid container spacing={3}>
      {inputs}
    </Grid>
  );
};

export default ClientForm;
