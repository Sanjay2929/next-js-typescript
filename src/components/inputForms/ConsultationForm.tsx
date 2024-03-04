"use client";
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";

const ConsultationForm = () => {
  const [formDetail, setformDetail] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("formDetailformDetail---", formDetail);
  };
  return (
    <form onSubmit={formSubmitHandler} className="max-w-[600px] mx-auto">
      <div>
        <CustomInput
          label="First Name"
          type="text"
          placeholder="First Name"
          id="firstname"
          value={formDetail.firstName}
          onChange={(value: string) => {
            setformDetail({
              ...formDetail,
              firstName: value,
            });
          }}
        />
        <CustomInput
          label="Last Name"
          type="text"
          placeholder="Last Name"
          id="LastName"
          value={formDetail.lastName}
          onChange={(value: string) => {
            setformDetail({
              ...formDetail,
              lastName: value,
            });
          }}
        />
        <CustomInput
          label="Phone Number"
          type="number"
          placeholder="Number"
          id="phone"
          value={formDetail.phoneNumber}
          onChange={(value: string) => {
            setformDetail({
              ...formDetail,
              phoneNumber: value.toString(),
            });
          }}
        />
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-yellow-500 border border-yellow-500 mt-4 w-full hover:bg-yellow-500 hover:text-white font-bold duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ConsultationForm;
