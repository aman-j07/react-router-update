import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const useGetUser = () => {
  const user = useContext(UserContext);
  return [user];
};

export default useGetUser;
