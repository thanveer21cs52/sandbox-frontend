'use client'
import { useState } from "react";
import Icon from "./icons";
import Ticklist from "./ticklist";
import Dotrow from "./dotrow";


function Pricing() {
    const [change,setchange]=useState(false)
    return (
        <div className="relative bg-bg w-full max-md:h-[1400px] md: min-h-[950px] lg:min-h-[80vh] flex justify-end items-end">
           
             <div className=" flex flex-col gap-6 justify-center items-center absolute -top-44 left-[4vw] w-11/12">
           
                       
                        
                        <div className="flex justify-between items-center gap-3  text-sm font-medium w-fit ">
                            
                            <p className="text-md text-gray-400 font-bold md:w-6/7">
                                monthly

                            </p>


                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onChange={()=>{
                                    setchange(!change)
                                }}/>
                                <div className="relative w-11 h-6  peer-focus:outline-none  0 rounded-full peer bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-blue-400 after:border-white after:rounded-full after:h-5 after:w-5 after:transition-all   "></div>

                            </label>

                            <p className="text-md text-gray-400 font-bold md:w-6/7">
                                yearly

                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-7 sm:px-20 md:px-0">

                            {
                                [
                                    {
                                        "iname": "setting",
                                        "plan": "basic",
                                        "rate": 10,
                                        "wise": "mo"
                                    },
                                    {
                                        "iname": "setting",
                                        "plan": "premium",
                                        "rate": 18,
                                        "wise": "mo"
                                    },
                                    {
                                        "iname": "setting",
                                        "plan": "corprate",
                                        "rate": 22,
                                        "wise": "mo"
                                    }
                                ].map((data: any, i: number) => {
                                    return <div className={` rounded-lg min-w-full  flex flex-col p-7 pt-9 pb-14 gap-4 bg-bg `} style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }} key={i}>
                                        <div className="w-full flex justify-center  " >
                                            <Icon name={'setting'} className={'text-4xl'} />
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <p className="  text-lg  font-semibold text-base-text">{data.plan} Plan</p>
                                        </div>
                                        <div className="w-full">
                                            <div className=" text-gray-500 flex justify-center gap-1 text-xl">
                                                <span className="mt-1">$</span>
                                                <span className="text-4xl">{data.rate}</span>
                                                <span className="mt-3">/{change?'yr':data.wise}</span>
                                            </div>

                                        </div>
                                        <Ticklist
                                         name={"1 Project"} icon="right" />
                                        <Ticklist name={"100K API Access"} icon="right" />
                                        <Ticklist name={"100MB Storage"} icon="right" />
                                        <Ticklist name={"Weekly Reportst"} icon="wrong" />
                                        <Ticklist name={"7/24 Support"} icon="wrong" />
                                        <div className="flex justify-center items-center">
                                            <button className="text-bg bg-blue-600  hover:text-pink-300   px-4 py-2 rounded-full cursor-pointer w-fit ">
                                                Choose plan
                                            </button>

                                        </div>


                                    </div>
                                }

                                )}

                        </div>


                    </div>


        </div>
       

    );
}

export default Pricing;