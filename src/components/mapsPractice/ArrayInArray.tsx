import React from "react";

interface ArrayInArrayProps {
  teamDetail: {
    name: string;
    present: boolean;
    rollnumber: number;
    blog: {
      title: string;
      paragraph: string;
    }[];
  }[];
}

const ArrayInArray = (props: ArrayInArrayProps) => {
  const { teamDetail } = props;
  return (
    <div className="flex flex-col gap-4 py-20 min-h-screen px-3">
      {teamDetail.map((team, index) => (
        <div
          key={index}
          className={`max-w-[600px] w-full p-10 text-center border mx-auto ${
            team.present ? "border-red-600" : " border-green-600"
          }`}
        >
          <h2 className="capitalize">{team.name}</h2>
          <p className="capitalize">Present: {team.present.toString()}</p>
          <p className="capitalize">Roll No: {team.rollnumber}</p>
          <div>
            {team.blog.map((blog, blogIndex) => (
              <div key={blogIndex}>
                <h3>{blog.title}</h3>
                <p>{blog.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrayInArray;
