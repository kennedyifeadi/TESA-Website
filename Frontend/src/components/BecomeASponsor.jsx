import React, { useRef, useState } from "react";
import background from "../assets/images/becomeaSponsorBG.jpg";
import { DynamicBackground } from "./DynamicBackground";
import toast, { Toaster } from "react-hot-toast";

export const BecomeASponsor = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    Name: "",
    Company: "",
    Mobile: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { Name, Company, Mobile, Email } = formData;
    
    if (!Name.trim() || !Company.trim() || !Mobile.trim() || !Email.trim()) {
      toast.error("All fields are required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return; 

    fetch(
      "https://script.google.com/macros/s/AKfycbw5bdczvS36hONCGXmOE5_6-wfrAi49K1NvDO6TVm1gHs7gST7MryA8HBS0LsWJ9KiO/exec",
      {
        method: "POST",
        body: new FormData(formRef.current),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.success(data.msg);
        setFormData({ Name: "", Company: "", Mobile: "", Email: "", Message: "" });
      })
      .catch((err) => {
        console.error("There was a problem with the fetch operation:", err);
        toast.error("Submission failed. Please try again.");
      });
  };

  return (
    <div className="w-full h-screen relative" style={{ fontFamily: '"Poppins", sans-serif' }}>
      <Toaster position="top-center" reverseOrder={false} />
      <DynamicBackground imageUrl={background} />
      <form onSubmit={handleSubmit} ref={formRef} className="flex pt-10 md:pt-0 md:justify-center gap-4 md:gap-8 absolute top-0 flex-col bg-[#222121c9] items-center w-full h-full px-4 md:p-14">
        <h1 className="font-bold text-2xl md:text-3xl">Become a Sponsor</h1>
        <div className="w-full gap-2 md:gap-8 h-[100px] md:h-[50px] flex flex-col md:flex-row justify-center">
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} className="rounded-md border-2 pl-4 md:flex-1 h-[50%] md:h-full border-[#392B1A] outline-none bg-[#FFFFFF]" placeholder="Name" />
          <input type="text" name="Company" value={formData.Company} onChange={handleChange} className="rounded-md border-2 pl-4 md:flex-1 h-[50%] md:h-full border-[#392B1A] outline-none bg-[#FFFFFF]" placeholder="Company Name" />
        </div>
        <div className="w-full gap-2 md:gap-8 h-[100px] md:h-[50px] flex flex-col md:flex-row  justify-center">
          <input type="text" name="Mobile" value={formData.Mobile} onChange={handleChange} className="rounded-md border-2 pl-4 md:flex-1 h-[50%] md:h-full border-[#392B1A] outline-none bg-[#FFFFFF]" placeholder="Mobile" />
          <input type="text" name="Email" value={formData.Email} onChange={handleChange} className="rounded-md border-2 pl-4 md:flex-1 h-[50%] md:h-full border-[#392B1A] outline-none bg-[#FFFFFF]" placeholder="Email" />
        </div>
        <div className="w-full h-[200px] flex justify-center">
          <textarea name="Message" value={formData.Message} onChange={handleChange} className="rounded-md border-2 pl-4 pt-2 w-full h-full border-[#392B1A] outline-none bg-[#FFFFFF]" placeholder="Message"></textarea>
        </div>
        <div>
          <button type="submit" className="cursor-pointer active:scale-75 transition-all bg-[#007AFF] flex justify-center items-center text-white w-[10rem] h-10 gap-2 font-medium rounded-md duration-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
