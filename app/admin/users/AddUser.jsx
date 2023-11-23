import React from "react";

const AddUser = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  let [submitting, setSubmitting] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      let res = await fetch(`${location.origin}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        setSubmitting(false);
        alert("User added successfully!");
        setUser({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      setSubmitting(false);
      alert("Something went wrong!");
      console.log(err);
    }
    return;
  };

  return (
    <div class="md:w-[40%] bg-slate-900">
      <div className="w-full p-6 mx-auto">
        <div className="bg-gray-800 border-gray-700 shadow-sm rounded-xl">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-white">
                Create an account
              </h1>
            </div>
            <div className="mt-12">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-white"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full px-4 py-3 text-sm text-gray-400 border-gray-700 rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-slate-900"
                        required
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
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
                    {submitting ? "Adding a new User..." : "Add User"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
