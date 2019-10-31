import StyledButton from "@material-ui/core/Button";

interface ButtonProps {
    onClick: any;
    text: string;
    variant ?: any;
    disabled ?: boolean;
}

const Button = ({onClick, text, variant, disabled} : ButtonProps) => (
    <StyledButton type="button" color="primary" variant={variant} onClick={onClick} disabled={disabled}>{text}</StyledButton>
)
export default Button;