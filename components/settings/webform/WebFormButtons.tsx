import axios from "axios";
import UserContext from "../../UserContext";
import globalVars from "../../../library/globalVariables";
import languages from "../../../library/languages";
import { useContext, useRef } from "react";
import {Button, Box, Typography} from "@material-ui/core"
import GetAppIcon from '@material-ui/icons/GetApp';

const WebFormButtons = ({ webFields }: any) => {

  const user = useContext(UserContext);
  const showTip = useRef(null);

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

    showTip.current.style.display = "block";
  };

  return (
    <>
      <Typography ref={showTip} style={{display: "none"}}>{languages.en.webFormTip}</Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={onDownload} variant="contained" color="primary" startIcon={<GetAppIcon/>}>{languages.en.donwloadForm}</Button>
      </Box>
    </>
  );
};

export default WebFormButtons;
