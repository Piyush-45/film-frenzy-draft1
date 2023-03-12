// import { app } from '../context/firebaseconfig'

import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 g-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold ">Sign In</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded "
              />
              <input
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded "
              />
              <button
                // onClick={handleSignIn}
                className="bg-red-600 py-3 my-6 rounded font-bold"
              >
                {/* {isSignedIn ? "Logout" :  "Sign In"} */}
                Sign In
              </button>
              {/* code for error message */}
              {error && <p className="text-red-600">{error}</p>}
              <div className="flex items-center justify-between text-sm text-white-">
                <p>
                  <input type="checkbox" className="mr-2 " />
                  Remember me
                </p>
                <p>Need Help</p>
              </div>
              <p>
                <span className="py-4 text-gray-600 ">New to Netflix ?</span>
                <span className="cursor-pointer ml-2 text-white">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
