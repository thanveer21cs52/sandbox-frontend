'use client'
import { useState } from "react";
import Icon from "../icons";
import Ticklist from "../ticklist";
import Pricing from "../Pricing";

function Banner8() {
    
    return (
        <div className="   w-full ">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex  flex-col justify-center items-center  p-10 pb-44   gap-10 text-dark-base text-center bg-blue-50  ">
                    <p className="text-xl text-gray-400 font-bold md:w-6/7">
                        Our Pricing

                    </p>
                    <p className="text-2xl lg:text-4xl font-semibold  ">
                        We offer great prices, premium products and quality service for your business.
                    </p>
                    <div>

                    </div>
                   
                    

                </div>
                <div className="w-full">
                     <Pricing/>
                </div>

            </div>

        </div>
    );
}

export default Banner8;