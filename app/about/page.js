import React from 'react'
import ContactCard from '../Components/cards/contactcard'
import { Mail , MapPin, Phone} from 'lucide-react';


export default function page() {
  return (
    <div className='md:h-[400px] md:pt-20 flex flex-wrap gap-3 pt-24 pb-3 md:p-0  items-center justify-around' >
      <ContactCard desc={"Address of the company "} Icon={MapPin}/>
      <ContactCard desc={"+91 9634127634"} Icon={Phone}/>
      <ContactCard desc={"VanakamdaMapla@gmail.com"} Icon={Mail}/>
    </div>
  )
}
