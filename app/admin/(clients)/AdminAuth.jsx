"use client";
import React from "react";
import { User } from "app/context/UserContext";
import { useRouter } from "next/navigation";
import Loading from "./components/Loading";

const AdminAuth = ({ children }) => {
  const router = useRouter();
  const [user] = React.useContext(User);
  React.useEffect(() => {
    if (!user.isLoggedIn) {
      router.push("/login");
    }
    if (user.isLoggedIn && !user.isAdmin) {
      router.push("/");
    }
  }, [user]);
  if (!user.isLoggedIn) {
    return <Loading />;
  }
  return children;
};

export default AdminAuth;
