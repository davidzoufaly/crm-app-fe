import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#d12121',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#FAFAFA',
      },
    },
    overrides: {
      MuiCardContent: {
            root: {
              padding: 16,
              '&:last-child': {
                paddingBottom: 16,
              },
            },
          },
      MuiTypography: {
        gutterBottom: {
          marginBottom: "1em"
        }
      }
        }
  });
  
  export default theme;