import Header from "../components/Header";
import stringMethods from "../functions/stringMethods";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd("| CRM-APP");
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
