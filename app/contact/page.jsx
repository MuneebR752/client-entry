import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-slate-900">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative grid max-w-5xl mx-auto space-y-5 sm:space-y-10">
          <div className="">
            <p className="mb-3 text-xs font-semibold tracking-wide text-center text-gray-200 uppercase">
              Swift Services
            </p>
            <h1 className="text-3xl font-bold text-gray-200 sm:text-5xl lg:text-6xl lg:leading-tight">
              Mail :{" "}
              <a className="underline" href="mailto:swiftservices14@gmail.com">
                swiftservices14@gmail.com
              </a>{" "}
              <span className="text-blue-500">
                Phone :{" "}
                <a className="underline" href="tel:+1 306 850 2560">
                  +1 306 850 2560
                </a>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
