import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import generateUniqueId from "generate-unique-id";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import UserContext from "../../components/UserContext";
import stringMethods from "../../library/stringMethods";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import {
  TableHead,
  TableBody,
  Typography,
  Table,
  TableCell,
  TableRow,
  Box
} from "@material-ui/core";

const Emails = ({ data, emailsCount }) => {
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();
  const user = useContext(UserContext);

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .removeSlashAndTextAfter()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
  }, [router]);

  const tableBody = data
    .map(email => (
      <TableRow key={generateUniqueId()}>
        <TableCell>
        {email.date}
        </TableCell>
        <TableCell>
          {email.to.map(e => (
            <p key={generateUniqueId()}>{e}</p>
          ))}
        </TableCell>
        <TableCell>{email.subject}</TableCell>
        <TableCell>
            {email.message.length > 50
              ? `${email.message.slice(0, 50)}...`
              : email.message}
        </TableCell>
      </TableRow>
    ))
    .reverse();

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .removeSlashAndTextAfter()
    .firstCharUpperCase()
    .getString();

  return !user.user.signedIn && !initialized ? (
    <LoadingSpinner />
  ) : (
    <>
      <Header />
      <Typography component="h1" variant="h3">
        {h1}
      </Typography>
      <Typography variant="h5" gutterBottom style={{color: "#535658"}}>
        {new stringMethods(languages.en.sent).firstCharUpperCase().getString()}{" "}
        {emailsCount}
      </Typography>
      <Box width="1" overflow="auto">
      <Table
        size="small"
        style={{ backgroundColor: "white", border: "1px solid #e0e0e0" }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="button">
                {languages.en.dateAndTime}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="button">{languages.en.to}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="button">{languages.en.subject}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="button">{languages.en.message}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableBody}</TableBody>
      </Table>
      </Box>
    </>
  );
};

Emails.getInitialProps = async (context: any) => {
  const res = await axios({
    method: "get",
    params: { key: context.query.key },
    url: `${globalVars.serverURL}/emails`,
    responseType: "json"
  });

  const resEmailsCount = await axios(
    `${globalVars.serverURL}/emails/count?key=${context.query.key}`
  );

  const emailsCount = await resEmailsCount.data;
  const data = await res.data;
  return { data, emailsCount };
};

export default Emails;
