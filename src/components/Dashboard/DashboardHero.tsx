import Link from "next/link";
import React from "react";

const DashboardHero = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center text-white gap-4">
      <h1 className="text-5xl font-medium ">
        Welcome to your ICC Dashbord, Tenkorang
      </h1>
      <h2 className="text-2xl">
        Kindly click the button below to select your courses
      </h2>
      <button className="bg-primary/80 hover:bg-primary transition-all w-[120px] h-[50px] text-xl rounded">
        <Link href="/me/courses">Courses</Link>
      </button>
    </div>
  );
};

export default DashboardHero;
