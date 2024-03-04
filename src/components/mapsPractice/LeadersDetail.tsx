import Link from "next/link";
import React, { ReactNode } from "react";
// interface Blog {
//   title: string;
//   paragraph: string;
// }
// interface Sociallinks {
//   icon: ReactNode;
//   link: string;
// }

// interface LeaderDetails {
//   name: string;
//   present: boolean;
//   rollnumber: number;
//   blog: {
//     title: string;
//     paragraph: string;
//   }[];
//   sociallinks: {
//     icon: ReactNode;
//     link: string;
//   }[];
// }

interface LeadersProps {
  leaderDetails: {
    name: string;
    present: boolean;
    rollnumber: number;
    blog: {
      title: string;
      paragraph: string;
    }[];
    sociallinks: {
      icon: ReactNode;
      link: string;
    }[];
  }[];
}
const LeadersDetail = (props: LeadersProps) => {
  const { leaderDetails } = props;
  return (
    <div className="flex flex-col gap-4 py-20 min-h-screen px-3">
      <h2 className="uppercase text-center text-yellow-500 text-xl font-bold">
        Leaders detail
      </h2>
      {leaderDetails.map((team, index) => (
        <div
          key={index}
          className={`max-w-[600px] w-full p-10 text-center border mx-auto ${
            team.present ? "border-green-600" : " border-red-600"
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
          <div className="flex items-center gap-3 justify-center pt-5">
            {team.sociallinks.map((social, socialIndex) => {
              return (
                <div key={socialIndex} className="p-3 bg-white rounded-lg">
                  <Link href={social.link}>{social.icon}</Link>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadersDetail;
