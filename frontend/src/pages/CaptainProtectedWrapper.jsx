import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//
const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const [captain, setCaptain] = useContext(CaptainDataContext);
  const [isloading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  //
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    // !!!!!!!!!!!!! Main Validation !!!!!!!!!!!!!
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate(`/captain-login`);
      });
  }, []);

  if (isloading) {
    return <div>Loading....</div>;
  }
  return <>{children}</>;
};

export default CaptainProtectedWrapper;
