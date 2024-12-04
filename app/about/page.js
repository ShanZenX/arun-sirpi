import React from "react";
import { Mail, MapPin, Phone, PhoneCallIcon } from "lucide-react";
import ContactCard from "../Components/cards/contactCard";
import Image from "next/image";
import about from "@/public/3321.jpg";
import ContactForm from '../Components/Forms/ContactForm';
export const metadata = {
  title: "Arun sirpi",
  description: "Top elevation work in chennai. About Arun sirpi",
};
export default function page() {
  return (
    <div className="md:h-full md:pt-20 flex flex-wrap gap-3 pt-24 pb-3 md:p-0  items-center justify-around">
      <div className="w-full pt-14 flex flex-col items-center justify-center">
        <h1 className="font-raleway text-black font-black">Get In Touch</h1>
        <p className="md:max-w-[40%] max-w-[80%] text-center">
          Ready to elevate your space with the enduring strength and beauty of
          cement? Reach out today to discuss your project!
        </p>
        <div className="md:w-[70%] w-11/12 gap-2 md:gap-0     rounded-2xl bg-transparent md:border border-black  md:h-[500px] bg-white flex flex-wrap items-center justify-evenly">
          <div className="md:w-[30%]  bg-yellow-950 flex flex-col p-4  text-white rounded-2xl h-[97%]">
            <p className="font-poppins text-3xl font-black pt-4 ">
              Contact Details
            </p>
            <div className="mt-6">
              <span>
                <p className="flex gap-2">
                  <PhoneCallIcon className="w-[20px] h-6" /> +91 8667003923
                </p>
              </span>
              <span>
                <p className="flex gap-2">
                  <MapPin className="w-[20px] h-6" /> Urapakkam , Chennai
                </p>
              </span>
              <Image src={about} alt="about-img" className="rounded-xl"></Image>
            </div>
          </div>
          <div className="md:w-4/6">
         <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

// <ContactCard desc={"Address of the company "} Icon={MapPin}/>
// <ContactCard desc={"+91 9634127634"} Icon={Phone}/>
// <ContactCard desc={"VanakamdaMapla@gmail.com"} Icon={Mail}/>
