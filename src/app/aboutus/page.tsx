"use client";
import React from "react";
import { AboutHeroImg } from "../../../public";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className=" bg-primary h-[100vh]">
      <section className=" flex justify-between items-center">
        <button
          onClick={() => router.back()}
          className="absolute top-3 left-3 p-6 text-lg flex items-center gap-1 text-white"
        >
          <IoIosArrowRoundBack size={35} />
          <span>Back</span>
        </button>
        <div className="w-[47%] text-white pl-10">
          <h1 className="text-[30px] font-semibold   ">
            Welcome to our College Companion! <br />
            Designed specifically for College Students
          </h1>
          <p className="mt-4 tetx-lg">
            Our app offers a suite of essential features to enhance your
            academic journey. Organize your courses efficiently, manage your
            tasks and to-do lists effectively, and stay on top of your academic
            progress with analytics.
          </p>
        </div>
        <div className="relative w-[50%] h-[100vh]">
          <Image
            src={AboutHeroImg}
            alt="/"
            fill
            className="h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
