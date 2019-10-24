const TextInput = ({onChange, text, value, type, title}) => (
    <>
    <label htmlFor={text}>{title}</label>
    <input type={type} autoComplete={text} name={text} id={text} onChange={onChange} value={value}/>
    </>
)

export default TextInput;