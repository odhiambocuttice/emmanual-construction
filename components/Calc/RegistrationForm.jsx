import { useContext } from "react";
import { useForm } from "react-hook-form";

import { DataContext } from "../../context/DataContext";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onSubmit } = useContext(DataContext);

  return (
    <div className=" rounded-xl  bg-gray-100 my-6 w-full">
      <h1 className="uppercase text-gray-600 text-center py-4 border-b-2 border-black mx-6 text-xs ">
        Identification Details
      </h1>
      <form
        className="px-4 justify-center items-center flex flex-col "
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <p className="text-sm text-gray-600 mb-8 text-center uppercase  max-w-md border-b-2 border-black py-4">
          Please fill out your details below so that we can get back to you.
        </p>
        {/* Name input section */}
        <div className="my-2 w-full ml-20">
          <div className="absolute p-4 bg-gradient-to-r from-gray-900 to-slate-600  rounded-l-md">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-white border-none block px-16 py-3 rounded-md uppercase w-[80%] text-black"
            placeholder="Full name"
            autoComplete="off"
            {...register("name", {
              required: {
                value: true,
                message: "Full name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Name must be letters only",
              },
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters",
              },
            })}
          />

          {/* If there is an error, display error message */}
          {errors.name && (
            <span className="text-xs text-red-600">{errors.name.message}</span>
          )}
        </div>
        {/* Email input section */}
        <div className="my-2 w-full ml-20">
          <div className="absolute p-4 bg-gradient-to-r from-gray-900 to-slate-600  rounded-l-md">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-white  border-none block px-16 py-3 rounded-md w-[80%] "
            placeholder="EMAIL ADDRESS"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />

          {/* If there is an error, display error message */}
          {errors.email && (
            <span className="text-xs text-red-600">
              Please enter a valid email address
            </span>
          )}
        </div>
        {/* Phone Number input section */}
        <div className="my-2 w-full ml-20">
          <div className="absolute p-4 bg-gradient-to-r from-gray-900 to-slate-600 rounded-l-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
          </div>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            // value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            autoComplete="off"
            className="bg-white  border-none block px-16 py-3 rounded-md uppercase w-[80%] text-black "
            placeholder="0700-254-254"
            {...register("phone_number", {
              required: {
                value: true,
                message: "Please enter your phone number",
              },
              maxLength: {
                value: 10,
                message: "Invalid phone number",
              },
              minLength: {
                value: 10,
                message: "Invalid phone number",
              },
              pattern: {
                pattern: /^\0[0-9]{3}-[0-9]{3}-[0-9]{3}$/,
                message: "Invalid phone number",
              },
            })}
          />

          {/* If there is an error, display error message */}
          {errors.phone_number && (
            <span className="text-xs text-red-600">
              Please enter a valid phone number
            </span>
          )}
        </div>

        {/* submit */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-slate-600 my-4 rounded-md w-[60%] ">
          <button className="uppercase py-2" type="submit">
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};
