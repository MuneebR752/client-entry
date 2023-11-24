"use client";
import React from "react";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
const Users = () => {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row">
        <AddUser />
        <UserTable />
      </div>
    </>
  );
};
export default Users;
