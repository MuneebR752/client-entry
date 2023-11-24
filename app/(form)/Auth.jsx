"use client";
import React from "react";
import { User } from "app/context/UserContext";
import { useRouter } from "next/navigation";
const Auth = ({ children }) => {
  const router = useRouter();
  const [user] = React.useContext(User);
  React.useEffect(() => {
    if (!user.isLoggedIn) {
      router.push("/login");
    }
  }, [user]);
  return children;
};

export default Auth;
