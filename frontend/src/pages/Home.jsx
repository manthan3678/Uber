import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationPannelSeach from "../Components/LocationPannelSeach";
//

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  //
  const sumbithandler = (e) => {
    e.preventDefault();
  };
  // ********** GSAP **************
  useGSAP(
    function () {
      if (pannelOpen) {
        gsap.to(pannelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(pannelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(pannelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(pannelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [pannelOpen]
  );

  //___________________
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://www.pngall.com/wp-content/uploads/4/Uber-Transparent.png"
        alt=""
      />
      {/* !!!!!!!!!!!!!!!!! Temporary Image !!!!!!!!!!!!!! */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://hornerparkdistrict.org/wp-content/uploads/2023/03/McAlister_Johnson-Park.png"
          alt=""
        />
      </div>
      {/*  */}
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        {/* 1 */}
        <div className="h-[30%] p-4 bg-white relative">
          <h5
            ref={pannelCloseRef}
            onClick={() => setPannelOpen(false)}
            className="absolute opacity-0 right-6 top-4 text-xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-xl font-semibold">Find A Trip</h4>
          {/* Form */}
          <form onSubmit={(e) => sumbithandler(e)}>
            <input
              type="text"
              onClick={() => setPannelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              placeholder="Add A PickUp Location"
              className="bg-[#eee] px-8 py-2 text-xl rounded-lg mt-3 w-full"
            />
            <input
              onClick={() => setPannelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-xl rounded-lg mt-3 w-full"
              type="text"
              placeholder="Enter Destination"
            />
          </form>
        </div>
        {/* 2 */}
        <div ref={pannelRef} className="bg-red-50">
          <LocationPannelSeach />
        </div>
      </div>
      {/* *************** Vehicle Section ************** */}
      <div className="fixed w-full px-3 py-5 z-10 bottom-0 translate-y-full bg-white">
        <h3 className="text-xl font-semibold mb-4">Choose A Vehicle</h3>
        {/*  */}
        <div className="flex w-full p-3 mb-2 items-center justify-between border-2 border-black rounded-xl">
          <img
            className="h-10"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className=" ml-1 w-1/2">
            <h4 className="font-medium text-sm">
              UberGo{" "}
              <span>
                {" "}
                <i className="ri-user-2-fill"> 4 </i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min Away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact Rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">193.0</h2>
        </div>
        {/* 2 */}
        <div className="flex w-full p-3 mb-2 items-center justify-between border-2 border-black rounded-xl">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" ml-1 w-1/2">
            <h4 className="font-medium text-sm">
              Moto{" "}
              <span>
                {" "}
                <i className="ri-user-2-fill"> 1 </i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 min Away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, MotoCycle Rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">76.0</h2>
        </div>
        {/* 3 */}
        <div className="flex w-full p-3 mb-2 items-center justify-between border-2 border-black rounded-xl">
          <img
            className="h-10"
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" ml-1 w-1/2">
            <h4 className="font-medium text-sm">
              UberAuto{" "}
              <span>
                {" "}
                <i className="ri-user-2-fill"> 4 </i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min Away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, Auto Rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">120.0</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
