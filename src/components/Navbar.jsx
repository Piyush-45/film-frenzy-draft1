import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { UserAuth } from "../context/AuthContext";
import Search from "./Search";

const Navbar = () => {


  const { user, logOut } = UserAuth();
  // console.log(user)

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="text-white flex justify-between items-center p-4 z-[100]  w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Film<span className="text-white">Frenzy</span>
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex items-center">
         {/* <Search/> */}
         
          <Link to="/account">
            <button className="text-white pr-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s" alt=""className="w-8" /></button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
