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
import HireUs from "@/components/HireUs";


// export const metadata = {
//   title: "Infintrix Technologies",
//   description: "Best Web Development Services Provider",
// };
export const metadata = {
  title: "Infintrix Technologies - Your Premier Web Development Services Provider",
  description: "Discover excellence with Infintrix Technologies, your trusted partner for top-notch web development services. We specialize in creating innovative and tailored solutions to elevate your online presence. Explore our expertise in responsive design, custom development, and cutting-edge technologies. Elevate your digital journey with the best web development services provider."
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
        suppressHydrationWarning={true}
      >
        <WebsiteNavbar />
          <TechMeshLinesBackground />
          {children}
        
        <WhatsappWidgetContainer/>
        <ToastContainer />
        <HireUs/>
        <MainFooter />
      </body>
    </html>
  );
}
