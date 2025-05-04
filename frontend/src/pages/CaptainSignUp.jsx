import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";
//
const CaptainSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [captain, setCaptain] = React.useContext(CaptainDataContext);
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    //
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captianData);
      localStorage.setItem("token", data.token);
      navigate("/captain-login");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                placeholder="LastName"
                value={lastName}
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
            {/*  */}
            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
              <select
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

            {/*  */}
            <button className="bg-[#111] text-white font-semibolds mb-5 rounded px-4 py-2  w-full text-lg ">
              Sign Up
            </button>

            <p className="text-center mb-3">
              ALready Have Account?
              <Link to="/captain-login" className="text-blue-600">
                Login As Captain
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

export default CaptainSignUp;
