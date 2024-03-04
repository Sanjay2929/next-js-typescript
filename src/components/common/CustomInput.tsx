"use client";
import React, { useState } from "react";

interface Iprops {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}
const CustomInput = (props: Iprops) => {
  const [inputBorder, setInputBorder] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const { label, type, placeholder, id, value, onChange } = props;
  const handleFocus = () => {
    setInputBorder(true);
  };

  const handleBlur = () => {
    setInputBorder(false);
  };
  return (
    <div>
      <label
        className="text-xl font-bold text-white pb-2 pt-4 block"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          required
          className={`w-full h-10 rounded-md px-4 outline-none border text-blue-600 ${
            inputBorder
              ? "border-green-600 placeholder:text-green-600"
              : " border-red-600 placeholder:text-red-600"
          }`}
          type={isPassword ? "text" : type}
          placeholder={placeholder}
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {type == "password" && (
          <label
            onClick={() => setIsPassword(!isPassword)}
            className="absolute text-xs top-1/2 right-2 -translate-y-1/2 text-black cursor-pointer"
            htmlFor={id}
          >
            {isPassword ? "Hide" : "Show"}
          </label>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
