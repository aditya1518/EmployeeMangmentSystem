import React, { useState, useSyncExternalStore } from "react";

const Login = (handleLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin.handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex lg:h-screen h-[90vh] w-full items-center justify-center">
      <div className="border-2 border-emerald-600 lg:p-20 py-20 px-15 rounded-2xl">
        <h1 className="text-3xl font-bold flex justify-center mt-[-50px] mb-5 lg:mb-[30px] lg:mt-[-30px]">Login</h1>
        <form
          className="flex flex-col items-center justify-center pt-5 g"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 lg:py-3 lg:px-5  outline-none text-sm py-2 px-5 bg-transparent placeholder:text-gray-400 lg:text-xl rounded-full"
            type="email"
            placeholder="Enter your email-id"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 lg:py-3 lg:px-5 mt-5 text-sm py-2 px-5  outline-none  bg-transparent placeholder:text-gray-400 lg:text-xl rounded-full"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="mt-5 border-none bg-emerald-600 lg:py-3 lg:px-5 text-sm py-2 px-5text-white  outline-none   placeholder:text-white lg:text-xl rounded-full hover:bg-emerald-700 hover:cursor-pointer w-full"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
