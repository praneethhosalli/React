import { useState , useEffect } from "react";
import { menuApiUrl } from "./constance";

const useResMenu = (resid) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(menuApiUrl + resid);
    const json = await data.json();
    console.log(json);
    setresInfo(json);
  };

  return resInfo;
};

export default useResMenu;
