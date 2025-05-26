"use client"
import Image from "next/image";
import Header from "./HomeComponents/Header";
import ServicesSection from "./HomeComponents/ServicesSection";
import AboutSection from "./HomeComponents/AboutSection";
import OurProjects from "./HomeComponents/OurProjects";
import YoutubeSection from "./HomeComponents/YoutubeSection";
import Customer from "./HomeComponents/Customer";
import Footer from "./StaticComponents/Footer";
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";
import Aos from "aos";
import VideoGallery from "./Components/MIniComponents/gallery /VideoGallery";
import CustomerVideoReviews from "./Components/MIniComponents/gallery /CustomerVideoReviews";


export default function Home() {


  return (
<div className="flex flex-col justify-center items-center bg-[#e6b21915]  " >
<Header/>
<CustomerVideoReviews/>
<VideoGallery/>
<ServicesSection/>
<AboutSection/>
<OurProjects/>
<YoutubeSection/>
<Customer/>
</div>
  );
}
