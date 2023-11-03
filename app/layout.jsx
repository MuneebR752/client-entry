import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Client Entry App",
  description: "An app that uses the client entry pattern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-full max-h-screen`}>
        <div className="overflow-y-auto no-scrollbar">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
