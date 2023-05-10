import React, { useState } from 'react'
import InfoCard from './InfoCard';


function Hero() {
  

  return (
    <div className="relative w-full mt-[50px] ">
        <img className="h-[80vh] w-full object-cover" src="https://cdn.discordapp.com/attachments/817048198022430761/1105585105440870451/pexels-pixabay-164634.jpg"/>

        <InfoCard />

        <div className="block absolute top-[100px] right-[290px]">
        <p className=" text-gray-200 text-[50px]">NEW ARRIVALS!</p>
        <p className=" text-gray-200 text-[50px]">IMPORT AND DOMESTIC!</p>


        </div>
    </div>
  )
}

export default Hero