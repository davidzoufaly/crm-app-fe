import TextField from "@material-ui/core/TextField";

const TextInput = ({ onChange, text, value, type, title }) => (
  <>
    <TextField
      type={type}
      label={title}
      fullWidth
      margin="normal"
      autoComplete={text}
      name={text}
      id={text}
      onChange={onChange}
      value={value}
    />
  </>
);

export default TextInput;
