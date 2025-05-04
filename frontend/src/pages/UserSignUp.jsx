import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/UserContext";
const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  // const [userData, setUserData] = useState({});
  //
  const navigate = useNavigate();
  const [user, setUser] = React.useContext(userDataContext);
  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      newUser
    );

    if (response.status === 200) {
      const data = response.data;
      // console.log(data.userData);
      setUser(data.userData);
      navigate("/login");
    }
    //
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
            <h3 className="text-base font-medium mb-2">What's Your Name</h3>
            <div className="flex gap-4 mb-5">
              <input
                type="text"
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                placeholder="FirstName"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                placeholder="LastName"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <h3 className="text-base font-medium mb-2">What's Your Email</h3>
            <input
              type="email"
              required
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              placeholder="Email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <button className="bg-[#111] text-white font-semibolds mb-5 rounded px-4 py-2  w-full text-lg ">
              Sign Up
            </button>

            <p className="text-center mb-3">
              ALready Have Account?
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
