import React, { useContext, useEffect } from "react";
// import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserRotectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token);
  //   const [user] = useContext(userDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return <>{children}</>;
};

export default UserRotectedWrapper;
