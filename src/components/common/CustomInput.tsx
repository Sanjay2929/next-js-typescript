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
        className="text-xl font-bold text-white px-4 pb-2 pt-4 block"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        required
        className={`w-full h-10 rounded-md px-4 outline-none border text-blue-600 ${
          inputBorder
            ? "border-green-600 placeholder:text-green-600"
            : " border-red-600 placeholder:text-red-600"
        }`}
        type={type}
        placeholder={placeholder}
        id={id}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
