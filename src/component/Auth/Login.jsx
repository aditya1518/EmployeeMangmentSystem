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
    <div className="flex h-screen w-full items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-2xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5  outline-none  bg-transparent placeholder:text-gray-400 text-xl rounded-full"
            type="email"
            placeholder="Enter your email-id"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 mt-3   outline-none  bg-transparent placeholder:text-gray-400 text-xl rounded-full"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="mt-5 border-none bg-emerald-600 py-3 px-5 text-white  outline-none   placeholder:text-white text-xl rounded-full hover:bg-emerald-700 hover:cursor-pointer w-full"
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
