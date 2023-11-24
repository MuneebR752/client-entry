import React from "react";

const Contact = () => {
  return (
    <div className="overflow-hidden bg-slate-900 min-h-screen flex justify-center items-center">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative mx-auto max-w-5xl grid space-y-5 sm:space-y-10">
          <div className="">
            <p
              className="text-xs text-center font-semibold 
             tracking-wide uppercase mb-3 text-gray-200"
            >
              Swift Services
            </p>
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl lg:leading-tight text-gray-200">
              Mail :{" "}
              <a className="underline" href="mailto:swiftservices14@gmail.com">
                swiftservices14@gmail.com
              </a>{" "}
              <span className="text-blue-500">
                Phone :{" "}
                <a className="underline" href="tel:250 555 0199">
                  250 555 0199
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
