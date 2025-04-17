import { Inter } from "next/font/google";
import "./globals.css";
import MyNavbar from "./StaticComponents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
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
        {/* ✅ Favicon setup */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#e6b219" />

        {/* ✅ SEO Meta */}
        <title>Best Cement Elevation Works in Chennai - Arun Sirpi</title>
        <meta
          name="description"
          content="Transform your building's exterior with expert cement elevation services in Chennai by Arun Sirpi. High-quality, durable, and aesthetic solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="cement elevation, wall elevation, construction, Chennai, cement works, Arun Sirpi, cement design works, Chennai construction services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Arun Sirpi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Open Graph Meta */}
        <meta
          property="og:title"
          content="Best Cement Elevation Works in Chennai - Arun Sirpi"
        />
        <meta
          property="og:description"
          content="Expert cement elevation services in Chennai. Contact us for durable and aesthetic cement elevation solutions."
        />
        <meta
          property="og:image"
          content="https://arun-sirpi.vercel.app/favicon.ico"
        />
        <meta property="og:url" content="https://arun-sirpi.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Arun Sirpi Cement Elevation Works"
        />
        <meta
          property="og:see_also"
          content="https://www.instagram.com/arunsirpi77/"
        />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://arun-sirpi.vercel.app/" />
      </Head>

      <body className="bg-[#e6b21915]">
        <TopHeader />
        <MyNavbar />
        {children}
        <FloatingIcon />
        <Footer />
      </body>
    </html>
  );
}
