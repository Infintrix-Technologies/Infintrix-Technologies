import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import MainFooter from "@/components/MainFooter";
import MainNavBar from "@/components/MainNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infintrix Technologies",
  description: "Anonymous Feedbacks App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col h-screen`}
        suppressHydrationWarning={true}
      >
        <WebsiteNavbar />

        <div className="container mx-auto flex-1">{children}</div>
        <ToastContainer />
        <MainFooter />
      </body>
    </html>
  );
}
