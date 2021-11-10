import { createContext } from "react";
import useFirebase from "./../../firebase/useFirebase/useFirebase";
export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const allData = useFirebase();
  return (
    <authContext.Provider value={allData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
