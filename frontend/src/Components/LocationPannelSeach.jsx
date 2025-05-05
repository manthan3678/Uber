import React from "react";

const LocationPannelSeach = () => {
  // sample arrray of location
  const locations = [
    "24B, Near JD Salona, Manthan Gedam",
    "20B, Near Kirana Store, Manthan Gedam",
    "23B, Near Buddha Vihar, Manthan Gedam",
  ];
  return (
    <div>
      {/* !!!!!!!!! Sample data !!!!!!!!!! */}
      {locations.map((elm, i) => {
        return (
          <div
            key={i}
            className=" border-1 px-2 rounded-xl border-gray-200 active:border-black flex items-center gap-3 my-3   justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium ">{elm}</h4>
          </div>
        );
      })}

      {/*  */}
    </div>
  );
};

export default LocationPannelSeach;
