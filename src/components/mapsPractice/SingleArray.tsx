import React from "react";

// interface StudentDetail {
//   name: string;
//   present: boolean;
//   rollnumber: number;
// }

interface SingleArrayProps {
  studentDetail: {
    name: string;
    present: boolean;
    rollnumber: number;
  }[];
}

const SingleArray = (props: SingleArrayProps) => {
  const { studentDetail } = props;
  return (
    <div className="flex flex-wrap gap-4 py-10 min-h-screen justify-center px-3">
      {studentDetail.map((value, index) => (
        <div
          key={index}
          className={`w-50 min-w-[300px] py-10 border max-w-[600px] w-full hover:scale-y-[120%] bg-black duration-500 ${
            value.present ? "border-green-600" : "border-red-600"
          }`}
        >
          <h2 className="text-white capitalize text-center">
            Name: {value.name}
          </h2>
          <h3 className="text-center">Roll no: {value.rollnumber}</h3>
        </div>
      ))}
    </div>
  );
};

export default SingleArray;
