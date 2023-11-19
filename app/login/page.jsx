"use client";
import React from "react";

const Login = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 rounded-xl shadow-sm bg-gray-800 border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-white">Sign in</h1>
            <p className="mt-2 text-sm text-gray-400">
              Don't have an account yet? Contact us{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium focus:outline-none"
                href="#"
              >
                Here
              </a>
            </p>
          </div>
          <div className="mt-12">
            <form>
              <div className="grid gap-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400"
                      required
                      aria-describedby="password-error"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
