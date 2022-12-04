import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Banner from "../../components/Banner";
import LogoBar from "../../components/LogoBar";
import { useForm } from "react-hook-form";
import WaitDialog from "../../components/WaitDialog";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const navigate = useNavigate();

  const [showWait, setShowWait] = useState(false);

  const handleSignUp = async (formData) => {
    // setShowWait(true);
    console.log(formData);
    // try {
    //   const { data: responseData } = await axios.post(
    //     "https://test.nexisltd.com/users/login",
    //     formData
    //   );
    //   console.log("Response Log in", responseData);
    //   navigate("/", { replace: true });
    // } catch (err) {
    //   console.error(err);
    //   toast.error("Cannot log in!", {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    // } finally {
    //   setShowWait(false);
    // }
  };

  return (
    <>
      <section className="container mx-auto p-8 lg:p-16 grid gap-4 grid-cols-3">
        <div className="col-span-3 lg:col-span-1 lg:order-2 shadow-lg px-8 lg:px-16">
          <div className="lg:hidden">
            <LogoBar />
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col justify-center"
          >
            <h2 className="text-h3 font-semibold text-center mt-10 lg:mt-20">
              Sign Up
            </h2>
            <input
              type="email"
              className="bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
              placeholder="Write Email Address"
              {...register("email", { required: "Email is required." })}
            />
            {formErrors.email && (
              <p className="mt-2 text-xs text-[#7E7E7E]">
                {formErrors.email.message}
              </p>
            )}
            <input
              type="password"
              placeholder="Write Your Password"
              className="bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Your password must be of 8 characters at least.",
                },
              })}
            />
            {formErrors.password && (
              <p className="mt-2 text-xs text-[#7E7E7E]">
                {formErrors.password.message}
              </p>
            )}

            <button
              type="submit"
              className="mt-8 w-28 h-8 rounded-md mx-auto bg-primary text-white"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-12 text-right">
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              Log In
            </Link>
            .
          </p>
        </div>
        <div className="hidden lg:block lg:col-span-2 lg:order-1">
          <LogoBar />
          <Banner />
        </div>
      </section>
      {showWait && <WaitDialog />}
    </>
  );
};

export default SignUp;
