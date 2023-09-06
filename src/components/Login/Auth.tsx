"use client";
import Image from "next/image";
import { LoginImg } from "../../../public";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/helpers/redux/store/hooks";
import { setSignUpReveal } from "@/helpers/redux/nav/navSlice";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useAuthMutation } from "@/helpers/redux/apiSlice";
import RegisterComponent from "./RegisterComponent";
import { Success } from "./Success";
import { setCredentials } from "@/helpers/redux/auth/authSlice";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { signUpReveal } = useAppSelector((state) => state.nav);
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [useLogin, { isLoading }] = useAuthMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data }: any = await useLogin(loginData);
      if (data) {
        console.log(data);
        dispatch(setCredentials(data));
        router.push("/me/dashboard");
      } else {
        console.log("No data received from the server.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex  h-screen">
      <div className="w-[40%]">
        <button
          onClick={() => router.back()}
          className="p-6 text-lg flex items-center gap-1 text-gray"
        >
          <IoIosArrowRoundBack size={35} />
          <span>Back</span>
        </button>
        <div className="h-[80vh] flex justify-center items-center ">
          {signUpReveal ? (
            <RegisterComponent />
          ) : (
            <div className="w-9/12">
              <div className="text-center">
                <h1 className="text-[35px] font-semibold">Welcome Back</h1>
                <p>Sign into your account</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 mt-8">
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  className="border-grayLight border-[1.5px] bg-transparent w-full p-2 outline-none"
                />
                <div className="flex justify-between items-center border-grayLight border-[1.5px] ">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    placeholder="Enter Password"
                    className="bg-transparent outline-none w-11/12 p-2"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray p-2 w-fit"
                  >
                    {showPassword ? (
                      <RxEyeOpen color="#808080" size={18} />
                    ) : (
                      <RxEyeClosed color="#808080" size={18} />
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm ">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" />
                    <h1>Remember Me</h1>
                  </div>
                  <span className="underline text-[#0129F9]">
                    Forgot Password?
                  </span>
                </div>
                <button
                  type="submit"
                  className="bg-primary w-full h-[45px] text-white font-semibold rounded-md"
                >
                  {isLoading ? "Loading" : "Sign in"}
                </button>
              </form>
              <p className="text-sm text-gray text-center mt-4">
                Don’t have an account?
                <button
                  onClick={() => dispatch(setSignUpReveal(true))}
                  className="text-[#0129F9]"
                >
                  &nbsp;Sign Up
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="relative w-[60%]">
        <Image
          src={LoginImg}
          fill={true}
          alt=""
          className="object-cover brightness-50"
        />
      </div>
    </div>
  );
};
export default Auth;
