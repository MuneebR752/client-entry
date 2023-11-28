"use client";
import React, { useContext } from "react";
import { User } from "app/context/UserContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
  const router = useRouter();
  const [userContext, setUserContext] = useContext(User);
  React.useEffect(() => {
    if (userContext.isLoggedIn) {
      router.push("/");
    }
  }, [userContext]);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  let [submitting, setSubmitting] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      let res = await fetch(`${location.origin}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        let data = await res.json();
        setUserContext({
          id: data.id,
          name: data.name,
          email: data.email,
          isLoggedIn: true,
          isAdmin: data.isAdmin,
          formData: data.formData,
        });
      } else {
        setSubmitting(false);
        alert("Invalid credentials!");
        return;
      }
    } catch (err) {
      setSubmitting(false);
      alert("Something went wrong!");
      console.log(err);
    }
    return;
  };
  return (
    <div className="w-full max-w-md p-6 mx-auto">
      <div className="bg-gray-800 border-gray-700 shadow-sm mt-7 rounded-xl">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-white">Sign in</h1>
            <p className="mt-2 text-sm text-gray-400">
              Don't have an account yet? Contact us{" "}
              <Link
                href="/contact"
                className="font-medium text-blue-600 decoration-2 hover:underline focus:outline-none"
              >
                Here
              </Link>
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-3 text-sm text-gray-400 border-gray-700 rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-slate-900"
                      required
                      aria-describedby="email-error"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full px-4 py-3 text-sm text-gray-400 border-gray-700 rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-slate-900"
                      required
                      aria-describedby="password-error"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                </div>
                <button
                  disabled={submitting}
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                >
                  {submitting ? "Signing in..." : "Sign in"}
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
