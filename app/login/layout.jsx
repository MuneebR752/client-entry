export const metadata = {
  title: "Login",
  description: "Credentials for login to access the form.",
};

export default function Layout({ children }) {
  return (
    <main lang="en" className="h-full">
      <div className="flex items-center h-full py-16 bg-slate-900">
        {children}
      </div>
    </main>
  );
}
