import React, { use, useEffect, useState, useSyncExternalStore } from "react";
import EmpDashboard from "./component/Dashboard/EmpDashboard.jsx";
import Login from "./component/Auth/Login.jsx";
import AdminDashboard from "./component/Dashboard/AdminDashboard.jsx";
import { getLocalStorage } from "./utils/LocalStorage.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [userdata,setUserData] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)  
    setUser(userData.role);
    setLoggedInUserData(userData.data);
  }
}, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser( "admin" );
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userdata) {
      const employee = userdata.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser( "employee" );
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee   })
        );
        return;
      }
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == "employee" ? <EmpDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  );
};

export default App;
