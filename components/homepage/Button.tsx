import StyledButton from "@material-ui/core/Button";

const Button = ({onClick, text, variant}) => (
    <StyledButton type="button" color="primary" variant={variant} onClick={onClick}>{text}</StyledButton>
)
export default Button;