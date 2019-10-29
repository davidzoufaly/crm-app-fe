import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import languages from "../library/languages";
import UserContext from "./UserContext";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EmailIcon from "@material-ui/icons/Email";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Grid,
  Button,
  Toolbar,
  AppBar,
  Box,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      color: theme.palette.grey["50"],
      padding: "0.5rem 1.5rem",
      margin: theme.spacing(1)
    },
    active: {

    },
    title: {
      flexGrow: 1
    },
    toolBar: {
      padding: 0
    },
    mobilMenuButton: {
      color: theme.palette.grey["50"],
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block"
      }
    },
    menuGrid: {
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        flexDireciton: "column"
      }
    },
    navMobil: {
        position: "absolute",
        left: 0,
        backgroundColor: "black",
        display: "block",
        width: "100%",
        top: "100%",
        zIndex: -1,
        padding: "2rem",
    },
    navDesktop: {
      position: "relative",
      display: "none", [theme.breakpoints.up("md")]: {
        display: "block"
      }
    }
  })
);

const Header = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const user = useContext(UserContext);
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [mobilMenu, setMobilMenu] = useState(false);

  const toggleMenu = () => {
    setMobilMenu(prevState => !prevState);
  };

  useEffect(() => {
    !matches ? setMobilMenu(false) : null
  }, [matches])

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar className={classes.toolBar} style={{position: "relative"}}>
          <Box display="flex" width="100%" justifyContent="space-between">
            <IconButton
              onClick={toggleMenu}
              className={classes.mobilMenuButton}
            >
              {!mobilMenu ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
            <Box
              component="nav"
              className={mobilMenu ? classes.navMobil : classes.navDesktop}
            >
              <Grid
                container
                direction={mobilMenu ? "column" : "row"}
                justify="center"
              >
                <Grid item>
                  <Link
                    href="/dashboard/[key]"
                    as={`/dashboard/${user.user.userkey}`}
                  >
                    <Button
                      startIcon={<DashboardIcon />}
                      className={classes.menuButton}
                    >
                      {languages.en.dashboard}
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/clients/[key]"
                    as={`/clients/${user.user.userkey}`}
                  >
                    <Button
                      startIcon={<PeopleAltIcon />}
                      className={classes.menuButton}
                    >
                      {languages.en.clients}
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/emails/[key]"
                    as={`/emails/${user.user.userkey}`}
                  >
                    <Button
                      startIcon={<EmailIcon />}
                      className={classes.menuButton}
                    >
                      {languages.en.emails}
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/settings/[key]"
                    as={`/settings/${user.user.userkey}`}
                  >
                    <Button
                      startIcon={<SettingsIcon />}
                      className={classes.menuButton}
                    >
                      {languages.en.settings}
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Button
            className={classes.menuButton}
            onClick={() => user.logoutUser()}
            startIcon={<ExitToAppIcon />}
          >
            {languages.en.logout}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
