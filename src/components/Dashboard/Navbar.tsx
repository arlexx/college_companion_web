"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LiaListAltSolid } from "react-icons/lia";
import { IoMdAnalytics } from "react-icons/io";
import { MdInventory } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";
import { LogoImg } from "../../../public";
import { useAppDispatch, useAppSelector } from "@/helpers/redux/store/hooks";
import { useLogoutMutation } from "@/helpers/redux/apiSlice";
import { logout } from "@/helpers/redux/auth/authSlice";
import { Router } from "next/router";

const Navbar = () => {
  const pathname = usePathname();
  const headerArr = pathname.split("/");
  console.log(headerArr);

  // Fetch User Data
  const { firstName, lastName, _id, token, username } = useAppSelector(
    (state) => state.auth?.user
  );

  const [sendLogout] = useLogoutMutation();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    console.log("started");
    try {
      await sendLogout({});
      console.log("logout done");
      dispatch(logout());
      router.push("/");
    } catch (error) {}
  };

  return (
    <div className="relative">
      <div className="py-1">
        <div className=" px-4 flex justify-between items-center pt-2 text-black ">
          <div></div>
          <div className="flex items-center lg:pl-40 gap-3">
            <div className="relative ">
              <Script
                strategy="beforeInteractive"
                src="https://code.iconify.design/1/1.0.7/iconify.min.js"
              />
            </div>
            <div>
              <h1 className="lg:text-2xl font-medium font-Lato text-center text-white">
                {headerArr[2] === "dashboard"
                  ? "Dashboard"
                  : headerArr[2] === "courses"
                  ? "Courses"
                  : headerArr[2] === "todo"
                  ? "Todos"
                  : "Statistics"}
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <div className="-space-y-1 lg:block hidden">
              <h1 className="text-lg text-white">
                {firstName + " " + lastName}
              </h1>
              <h2 className="text-[#c3c3c3] text-sm">
                Bsc. Information Technology
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-screen w-[130px] absolute top-0">
        <div className="flex flex-col items-center">
          <Image
            src={LogoImg}
            alt="logo"
            className="w-[100px] -mt-3 object-cover"
          />
          <div className="mt-16 flex flex-col gap-12">
            <Link href="/me/dashboard">
              <div className="shadow p-2 rounded ">
                <BiSolidDashboard size={30} className="text-[#5f6672]" />
              </div>
            </Link>
            <Link href="/me/courses">
              <div className="shadow p-2 rounded ">
                <HiOutlineClipboardDocumentList
                  size={30}
                  className="text-[#5f6672]"
                />
              </div>
            </Link>

            <Link href="/me/todo">
              <div className="shadow p-2 rounded ">
                <LiaListAltSolid size={30} className="text-[#5f6672]" />
              </div>
            </Link>

            <div className="shadow p-2 rounded ">
              <MdInventory size={30} className="text-[#5f6672]" />
            </div>
            <Link href="/me/analytics">
              <div className="shadow p-2 rounded ">
                <IoMdAnalytics size={30} className="text-[#5f6672]" />
              </div>
            </Link>
          </div>
          <div
            onClick={handleLogout}
            className="mt-28 text-red-700 shadow p-2 rounded cursor-pointer"
          >
            <IoLogOutOutline size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
