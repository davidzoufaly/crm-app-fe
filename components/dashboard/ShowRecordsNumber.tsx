import Link from "next/link";
import UserContext from "../UserContext";
import languages from "../../library/languages";
import { useContext } from "react";
import { Typography, Card, Button, Box } from "@material-ui/core";

const ShowRecordsNumber = ({
  data,
  string,
  buttonString,
  link,
  subData
}: any) => {
  const user = useContext(UserContext);

  return (
    <Card
      style={{
        padding: "2rem 2rem",
        height: "100%"
      }}
    >
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Typography component="h2" variant="h2">
          {data}
        </Typography>
        <Typography gutterBottom>{subData}</Typography>
        <Typography variant="h5" gutterBottom>
          {string}
        </Typography>

        <Link href={`${link}/[key]`} as={`${link}/${user.user.userkey}`}>
          <Button color="primary">
            {languages.en.goTo} {buttonString.toLowerCase()}
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default ShowRecordsNumber;
