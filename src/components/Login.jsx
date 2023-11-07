import React from "react";
import { useForm } from "react-hook-form";
import usersdata from "../assets/data.json";
import { useNavigate } from "react-router-dom";

function Login() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const userData = usersdata.find((user) => user.email === data.email);
    if (!userData) {
      alert("User with email id doesnot exists");
    } else if (userData.password === data.password) {
      console.log(data.email + " You Are Successfully Logged In");
      navigate("/studyroom");
    } else {
      alert("Password or email id doesnot exists");
    }
  };
  return (
    <>
    <div className="flex justify-center items-center pt-24">
        <div className=" my-10 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="/studyroom"
              method="GET"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>*Email* is mandatory </span>
                )}
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  {...register("password")}
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm font-medium text-black hover:underline dark:text-white">
                  Forgot password?
                </a>
              </div>
              <button type={"submit"} className="w-full text-black bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
        </div>
    </>
  );
}

export default Login;
