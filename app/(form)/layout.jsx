import Navbar from "@/app/components/Navbar";
import Auth from "./Auth";
export const metadata = {
  title: "Information Form",
  description:
    "A Form by Swift Consultants for collecting information from users",
};
export default function Layout({ children }) {
  return (
    <Auth>
      <div className={`max-w-full min-h-screen bg-[#1f2937]`}>
        <Navbar />
        {children}
      </div>
    </Auth>
  );
}
