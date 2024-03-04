"use client";
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import CustomRadio from "../common/CustomRadio";

const ConsultationForm = () => {
  const [formDetail, setformDetail] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });
  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("formDetailformDetail---", formDetail);
    setformDetail({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
    });
  };
  return (
    <form onSubmit={formSubmitHandler} className="max-w-[600px] mx-auto py-10">
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
      <CustomInput
        label="Password"
        type="password"
        placeholder="Password"
        id="Password"
        value={formDetail.password}
        onChange={(value: string) => {
          setformDetail({
            ...formDetail,
            password: value.toString(),
          });
        }}
      />
      <h2 className="pt-5 uppercase text-xl font-bold">Sector</h2>
      <div className="flex justify-between pt-3 pb-2">
        <div className="w-1/2">
          <CustomRadio id="public" value="public" label="public" />
        </div>
        <div className="w-1/2">
          <CustomRadio id="private" value="private" label="private" />
        </div>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-yellow-500 border border-yellow-500 w-full hover:bg-yellow-500 hover:text-white font-bold duration-300 mt-5"
      >
        Submit
      </button>
    </form>
  );
};

export default ConsultationForm;
