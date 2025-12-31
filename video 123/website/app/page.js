

import React from 'react'
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import about from './about/page';
import contact from './contact/page'; 
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col justify-between my-5 relative size-80 bg-white'>
<Image className='mx-auto object-contain' src= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqK69atnJMR1uNlpN95ci5tW-aLM-14rJBtFea_AgltzUqkWbldRW_Cd8-o7NcWh2XjFI&usqp=CAU"} fill={true} alt='image'></Image>
    </div>
  )
}

export default page
export const metadata = { 
  title: "Airbnb - Home",
  description: "Airbnb Luxury Rentle",
};
