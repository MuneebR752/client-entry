import Navbar from "./components/Navbar";
export const metadata = {
  title: "Admin Panel",
  description:
    "A Form by Swift Consultants for collecting information from users",
};

export default function Layout({ children }) {
  return (
    <div className={` bg-slate-900`}>
      <Navbar />
      {children}
    </div>
  );
}
