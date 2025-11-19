import React, { useEffect, useState, useContext } from "react";
import EmpDashboard from "./component/Dashboard/EmpDashboard.jsx";
import Login from "./component/Auth/Login.jsx";
import AdminDashboard from "./component/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [userdata] = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [appReady, setAppReady] = useState(false); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const savedEmp = localStorage.getItem("selectedEmployee");
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);

      if (parsedUser.role === "employee") {
        const fresh = employees.find(
          (e) => e.firstName === parsedUser.data.firstName
        );
        setLoggedInUserData(fresh);
      }

      if (parsedUser.role === "admin" && savedEmp) {
        const emp = JSON.parse(savedEmp);
        const fresh = employees.find((e) => e.firstName === emp.firstName);
        setSelectedEmployee(fresh);
      }
    }

    setAppReady(true); 
  }, []);

  if (!appReady) return null; 

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      window.history.pushState({}, "");
      setUser("admin");

      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    const employee = userdata.find(
      (e) => email === e.email && password === e.password
    );

    if (!employee) return alert("Invalid credentials");

    window.history.pushState({}, "");
    setUser("employee");
    setLoggedInUserData(employee);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "employee", data: employee })
    );
  };

  const updateLoggedUserState = (updatedEmployee) => {
    setLoggedInUserData(updatedEmployee);

    const logged = JSON.parse(localStorage.getItem("loggedInUser"));
    if (logged && logged.role === "employee") {
      logged.data = updatedEmployee;
      localStorage.setItem("loggedInUser", JSON.stringify(logged));
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && !selectedEmployee && (
        <AdminDashboard
          changeUser={setUser}
          setSelectedEmployee={(emp) => {
            window.history.pushState({}, "");
            localStorage.setItem("selectedEmployee", JSON.stringify(emp));
            setSelectedEmployee(emp);
          }}
        />
      )}

      {user === "admin" && selectedEmployee && (
        <EmpDashboard
          changeUser={() => {
            localStorage.removeItem("selectedEmployee");
            setSelectedEmployee(null);
          }}
          data={selectedEmployee}
          updateLoggedUserState={updateLoggedUserState}
          isAdminView={true}
        />
      )}

      {user === "employee" && (
        <EmpDashboard
          changeUser={setUser}
          data={loggedInUserData}
          updateLoggedUserState={updateLoggedUserState}
          isAdminView={false}
        />
      )}
    </>
  );
};

export default App;
