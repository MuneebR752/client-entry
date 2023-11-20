import UserContext from "./context/UserContext";
import { Inter } from "next/font/google";
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <UserContext>
      <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </UserContext>
  );
}
