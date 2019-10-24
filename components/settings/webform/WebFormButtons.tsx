import axios from "axios";
import globalVars from "../../../library/globalVariables";
import languages from "../../../library/languages";

const WebFormButtons = ({ webFields }: any) => {

  const onDownload = async () => {
    const res = await axios({
      method: "GET",
      url: `${globalVars.serverURL}/webform/`,
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
      <button onClick={onDownload}>{languages.en.donwloadForm}</button>
  );
};

export default WebFormButtons;
