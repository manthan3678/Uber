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
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://www.pngall.com/wp-content/uploads/4/Uber-Transparent.png"
        alt=""
      />
      {/* Temporary Image */}
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
          <form onSubmit={(e) => sumbithandler(e)}>
            <input
              type="text"
              onClick={() => setPannelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              placeholder="Add a pickUp Location"
              className="bg-[#eee] px-8 py-2 text-base rounded-lg mt-3 w-full"
            />
            <input
              onClick={() => setPannelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg mt-3 w-full"
              type="text"
              placeholder="Enter Destination"
            />
          </form>
        </div>
        {/* 2 */}
        <div ref={pannelRef} className="bg-red-300">
          <LocationPannelSeach />
        </div>
      </div>
    </div>
  );
};

export default Home;
