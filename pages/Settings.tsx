import Header from "../components/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";
import stringMethods from "../library/stringMethods";
import titleSubText from "../library/globalVariables";

const Settings = () => {
  const router = useRouter();

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(titleSubText);
    document.title = title.text;
  }, [router]);

  return (
    <div>
      <Header />
      <h1>Settings</h1>
      <p>This is app settings</p>
    </div>
  );
};

export default Settings;
