export const metadata = {
  title: "Login",
  description: "Login Form for Credentials",
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
