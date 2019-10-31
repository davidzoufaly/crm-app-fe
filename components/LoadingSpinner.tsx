import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

interface LoadingSpinnerProps {
  margin?: string;
  level?: number;
}

const LoadingSpinner = ({ margin, level }: LoadingSpinnerProps) => {
  const styleSpinner = (p, l) => {
    switch (p) {
      case `r`:
        return { marginRight: `${l}rem` };
      case `l`:
        return { marginLeft: `${l}rem` };
      case `t`:
        return { marginTop: `${l}rem` };
      case `b`:
        return { marginBottom: `${l}rem` };
    }
  };

  return (
    <Box style={styleSpinner(margin, level)}>
      <CircularProgress size={30} />
    </Box>
  );
};

export default LoadingSpinner;
