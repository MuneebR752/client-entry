import Navbar from "@/app/components/Navbar";
export const metadata = {
  title: "Information Form",
  description:
    "A Form by Swift Consultants for collecting information from users",
};

export default function Layout({ children }) {
  return (
    <div className={`max-w-full max-h-screen`}>
      <Navbar />
      {children}
    </div>
  );
}
