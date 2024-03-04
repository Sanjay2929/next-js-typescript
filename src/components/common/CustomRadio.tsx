import React from "react";
interface Iprops {
  id: string;
  value: string;
  label: string;
}
const CustomRadio = (props: Iprops) => {
  const { id, value, label } = props;
  return (
    <div className="flex items-center gap-3">
      <input
        id={id}
        type="radio"
        name="sector"
        value={value}
        placeholder={label}
      />
      <label className="uppercase" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CustomRadio;
