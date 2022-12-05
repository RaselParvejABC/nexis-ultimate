import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Banner from "../../components/Banner";
import LogoBar from "../../components/LogoBar";
import { useForm } from "react-hook-form";
import WaitDialog from "../../components/WaitDialog";
import { toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors: formErrors },
  } = useForm();

  const navigate = useNavigate();

  const [showWait, setShowWait] = useState(false);
  const [step, setStep] = useState(0);

  const handleSignUp = async (formData) => {
    setShowWait(true);
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

  const handleNext = async () => {
    if (step === 0) {
      if (await trigger(["firstname", "lastname"])) {
        setStep(1);
      }
      return;
    }

    if (step === 1) {
      if (await trigger(["phone", "email"])) {
        setStep(2);
      }
    }
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

            <div
              className={step === 0 ? "flex flex-col items-stretch" : "hidden"}
            >
              <input
                type="text"
                className="bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
                placeholder="Write First Name"
                {...register("firstname", {
                  required: "First Name is required.",
                })}
              />
              {formErrors.firstname && (
                <p className="mt-2 text-xs text-[#7E7E7E]">
                  {formErrors.firstname.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Write Last Name"
                className="bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
                {...register("lastname", {
                  required: "Last Name is required.",
                })}
              />
              {formErrors.lastname && (
                <p className="mt-2 text-xs text-[#7E7E7E]">
                  {formErrors.lastname.message}
                </p>
              )}
            </div>

            <div
              className={step === 1 ? "flex flex-col items-stretch" : "hidden"}
            >
              <input
                type="tel"
                className="bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
                placeholder="Write Phone Number"
                {...register("phone", {
                  required: "Phone Number is required.",
                })}
              />
              {formErrors.phone && (
                <p className="mt-2 text-xs text-[#7E7E7E]">
                  {formErrors.phone.message}
                </p>
              )}
              <input
                type="email"
                placeholder="Write Email Address"
                className="bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
                {...register("email", {
                  required: "Email is required.",
                })}
              />
              {formErrors.email && (
                <p className="mt-2 text-xs text-[#7E7E7E]">
                  {formErrors.email.message}
                </p>
              )}
            </div>

            <div
              className={step === 2 ? "flex flex-col items-stretch" : "hidden"}
            >
              <input
                type="password"
                className="bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
                placeholder="Write Minimum 8 Character Password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long!",
                  },
                })}
              />
              {formErrors.password && (
                <p className="mt-2 text-xs text-[#7E7E7E]">
                  {formErrors.password.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 mt-8 justify-center items-center">
              {step !== 0 ? (
                <span
                  className="text-xs text-[#7E7E7E] justify-self-start"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </span>
              ) : (
                <span />
              )}
              {step !== 2 && (
                <button
                  type="button"
                  className="w-28 h-8 rounded-md mx-auto bg-primary text-white"
                  onClick={handleNext}
                >
                  <span>
                    Next <BsArrowRight className="inline" />
                  </span>
                </button>
              )}
              {step === 2 && (
                <button
                  type="submit"
                  className="w-28 h-8 rounded-md mx-auto bg-primary text-white"
                >
                  Sign Up
                </button>
              )}
            </div>
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
