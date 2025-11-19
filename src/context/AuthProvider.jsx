import { getLocalStorage } from "../utils/LocalStorage";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  useEffect(() => {
    if (userData && userData.length > 0) {
      localStorage.setItem("employees", JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
