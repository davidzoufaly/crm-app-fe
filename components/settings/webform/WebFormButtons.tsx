import axios from "axios";
import UserContext from "../../UserContext";
import globalVars from "../../../library/globalVariables";
import languages from "../../../library/languages";
import { useContext } from "react";
import {Button, Box, Typography} from "@material-ui/core"
import GetAppIcon from '@material-ui/icons/GetApp';

const WebFormButtons = ({ webFields }: any) => {

  const user = useContext(UserContext);

  const onDownload = async () => {
    const res = await axios({
      method: "GET",
      url: `${globalVars.serverURL}/webform/`,
      params: {key: user.user.userkey},
      data: webFields,
      responseType: "blob"
    });
    const url = await window.URL.createObjectURL(new Blob([res.data]));
    const link = await document.createElement("a");
    link.href = url;
    link.setAttribute("download", "crm-form.js");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={onDownload} variant="contained" color="primary" startIcon={<GetAppIcon/>}>{languages.en.donwloadForm}</Button>
      </Box>
      <Typography>{languages.en.webFormTip}</Typography>
    </>
  );
};

export default WebFormButtons;
