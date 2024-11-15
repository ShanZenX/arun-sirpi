import { Inter } from "next/font/google";
import "./globals.css";
import MyNavbar from "./StaticComponents/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./StaticComponents/Footer";
import FloatingIcon from "./Components/MIniComponents/FloattingIcon";
import TopHeader from "./StaticComponents/TopHeader";
import Head from "next/head";



export const metadata = {
  title: "Arun sirpi",
  description: "Top elevation work in chennai.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <Head>
        <title>Best Cement Elevation Works in Chennai</title>
        <meta name="description" content="Expert cement elevation services in Chennai for your construction needs." />
        <meta name="keywords" content="cement elevation, construction, Chennai" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best Cement Elevation Works in Chennai" />
        <meta property="og:description" content="Expert cement elevation services in Chennai." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://arun-sirpi.vercel.app/" />
        <link rel="canonical" href="https://arun-sirpi.vercel.app/" />
      </Head>
      <body className="bg-[#e6b21915]">
        <TopHeader/>
        <MyNavbar/>
        {children}
        <FloatingIcon/>
        <Footer/></body>
    </html>
  );
}
