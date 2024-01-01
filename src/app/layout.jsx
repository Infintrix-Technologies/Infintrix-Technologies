import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import "./globals.css";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import MainFooter from "@/components/MainFooter";
import TechMeshLinesBackground from "@/components/TechMeshLinesBackground";
import WhatsappWidgetContainer from "@/components/WhatsappWidgetContainer";


export const metadata = {
  title: "Infintrix Technologies",
  description: "Best Web Development Services Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen flex flex-col h-screen`}
        suppressHydrationWarning={true}
      >
        <WebsiteNavbar />
        

        <div className="flex-1">
          {/* <TechMeshLinesBackground /> */}
          {children}
        </div>
        <WhatsappWidgetContainer/>
        <ToastContainer />
        <MainFooter />
      </body>
    </html>
  );
}
