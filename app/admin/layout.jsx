import Navbar from "./components/Navbar";
export const metadata = {
  title: "Admin Panel",
  description: "A Admin Panel to manage your users, clients, and more.",
};

export default function Layout({ children }) {
  return (
    <div className={`bg-slate-900`}>
      <Navbar />
      {children}
    </div>
  );
}
