import React from "react";
import Link from "next/link";
const Instructions = () => {
  return (
    <div className="max-w-4xl py-16 mx-auto text-xl text-gray-200">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-100">
        Instructions to fill the form
      </h1>
      <ul className="flex flex-col justify-center w-full gap-8 list-disc">
        <li>
          You must have an accout to fill the form. If you don't have one{" "}
          <Link className="text-blue-500" href={"/contact"}>
            Click Here
          </Link>{" "}
          to request an account.
        </li>
        <li>Fill the form with the correct information.</li>
        <li>You can edit your information even after submitting the form.</li>
        <li>There are some required fields, please consider filling them</li>
        <li>
          If you have any kind of query, you can contact us{" "}
          <Link className="text-blue-500" href={"/contact"}>
            Here
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
