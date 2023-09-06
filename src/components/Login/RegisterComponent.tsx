import { useRegisterMutation } from "@/helpers/redux/apiSlice";
import { setSignUpReveal } from "@/helpers/redux/nav/navSlice";
import { useAppDispatch, useAppSelector } from "@/helpers/redux/store/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    number: "",
    password: "",
  });

  const [useRegister, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const register = await useRegister(registerData).unwrap();
      dispatch(setSignUpReveal(false));
      console.log(register);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-9/12">
      <div className="text-center">
        <h1 className="text-[35px] font-semibold">Hi There</h1>
        <p>Create account to start using ICC</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-8">
        <input
          type="text"
          placeholder="Enter First Name"
          value={registerData.firstName}
          onChange={(e) =>
            setRegisterData({ ...registerData, firstName: e.target.value })
          }
          className="border-grayLight border-[1.5px] bg-transparent w-full p-2 outline-none"
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={registerData.lastName}
          onChange={(e) =>
            setRegisterData({ ...registerData, lastName: e.target.value })
          }
          className="border-grayLight border-[1.5px] bg-transparent w-full p-2 outline-none"
        />
        <input
          type="text"
          placeholder="Enter Username"
          value={registerData.username}
          onChange={(e) =>
            setRegisterData({ ...registerData, username: e.target.value })
          }
          className="border-grayLight border-[1.5px] bg-transparent w-full p-2 outline-none"
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          className="border-grayLight border-[1.5px] bg-transparent w-full p-2 outline-none"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          className="border-grayLight border-[1.5px] bg-transparent w-full p-2 outline-none"
        />
        <div className="flex justify-between items-center border-grayLight border-[1.5px] ">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Repeat Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
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
        <div className="flex items-center gap-3 text-sm font-light">
          <input type="checkbox" id="privacypolicy" name="privacypolicy" />
          <h1>
            By clicking this you hereby accept our
            <span className="text-[#FA790F]">terms & conditions</span>
          </h1>
        </div>
        <div className="flex items-center gap-3 text-sm font-light">
          <input type="checkbox" />
          <h1>
            Yes, I would love to receive emails with great content and updates.
            (optional)
          </h1>
        </div>

        <button
          type="submit"
          className="bg-primary w-full h-[45px] text-white font-semibold rounded-md"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-gray text-center mt-4">
        Already have an account?
        <button
          onClick={() => dispatch(setSignUpReveal(false))}
          className="text-[#0129F9]"
        >
          &nbsp;Sign In
        </button>
      </p>
    </div>
  );
};

export default RegisterComponent;
