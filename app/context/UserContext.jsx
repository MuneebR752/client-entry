"use client";
import React, { createContext, useState } from "react";
export const User = createContext(null);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
  });
  return <User.Provider value={[user, setUser]}>{children}</User.Provider>;
};

export default UserContext;
