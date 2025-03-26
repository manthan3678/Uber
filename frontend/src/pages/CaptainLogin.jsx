import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captaindata, setCaptainData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    setEmail("");
    setPassword("");
    console.log(captaindata);
  };
  return (
    <>
      <div className="p-7 flex flex-col justify-between">
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Uber-Transparent.png"
            alt=""
            className="w-16 "
          />
          <form action="" onSubmit={handleSubmit}>
            <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
            <input
              type="email"
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email@example.com"
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <button className="bg-[#111] text-white font-semibolds mb-7 rounded px-4 py-2  w-full text-lg ">
              Login
            </button>

            <p className="text-center mb-3">
              Want to Join?
              <Link to="/captain-signup" className="text-blue-600">
                Register As Captain
              </Link>
            </p>
          </form>
        </div>

        <div>
          <Link
            to="/login"
            className="flex item-center justify-center bg-[#d86a36] text-white font-semibolds mb-7 rounded px-4 py-2  w-full text-lg "
          >
            Login As User
          </Link>
        </div>
      </div>
    </>
  );
};

export default CaptainLogin;
