import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DynamicBackground } from "../components/DynamicBackground";
import ConstuctionCap from "../assets/images/ConstructionCap.png";
import { useAuth } from "../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export const SignIn = () => {
  const [adminDetails, setAdminDetails] = useState({
    loginUsername: "",
    loginPassword: "",
  });
  const [loader, setLoader] = useState(false);
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await fetch(
        "https://tesa-website.onrender.com/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminDetails),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      await signin(data);
      toast.success("Login successful");
      navigate("/admin");
      setLoader(false);
      setAdminDetails({ loginUsername: "", loginPassword: "" });
    } catch (error) {
      setLoader(false);
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex-1 h-full flex">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center items-center px-10 gap-2 lg:gap-6"
        >
          <div className="w-full flex flex-col gap-2">
            <h1
              className="text-xl md:text-2xl lg:text-4xl font-bold"
              style={{ fontFamily: '"Aldrich", sans-serif' }}
            >
              Welcome!
            </h1>
            <p className="text-md md:text-lg lg:text-xl">
              Let’s get you signed in
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 mt-6">
            <input
              type="text"
              name="loginUsername"
              value={adminDetails.loginUsername}
              onChange={handleChange}
              className="w-full md:w-1/2 h-[50px] outline-0 border-b border-b-[#392B1A]"
              placeholder="Enter Admin Name"
            />
            <input
              type="password"
              name="loginPassword"
              value={adminDetails.loginPassword}
              onChange={handleChange}
              className="w-full md:w-1/2 h-[50px] outline-0 border-b border-b-[#392B1A]"
              placeholder="Password"
            />
            <NavLink
              to={"/admin/forgotpassword"}
              className="text-sm w-max text-[#003366] mt-2 md:mt-4 lg:mt-6"
            >
              <span>Forgot password?</span>
            </NavLink>
          </div>
          <div className="w-full h-max mt-2">
            <button
              type="submit"
              className="h-[50px] cursor-pointer active:scale-75 duration-500 ease-in-out bg-[#392B1A] w-1/2 rounded-md text-white font-medium flex items-center justify-center gap-2"
            >
              {loader ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Loading...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1 h-full flex justify-center items-center relative">
        <DynamicBackground imageUrl={ConstuctionCap} />
        <div className="w-[70%] h-[80%] glass rounded-3xl flex justify-center items-center relative">
          <div className="w-[80%] border-[2px] border-dashed h-[40%] flex justify-center items-center border-white rounded-sm">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-light loaderScreen uppercase text-white text-center md:leading-24">
              Welcome <br /> Back
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
