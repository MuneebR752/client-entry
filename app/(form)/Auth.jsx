"use client";
import React from "react";
import { User } from "app/context/UserContext";
import { useRouter } from "next/navigation";
import Loading from "../admin/(clients)/components/Loading";
const Auth = ({ children }) => {
  const router = useRouter();
  const [user] = React.useContext(User);
  React.useEffect(() => {
    if (!user.isLoggedIn) {
      router.push("/login");
    }
  }, [user]);
  if (user.isLoggedIn) {
    return children;
  }
  return <Loading />;
};

export default Auth;
