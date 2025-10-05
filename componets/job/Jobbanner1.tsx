// components/JoinTeamSection.tsx

"use client";
import { Briefcase, Users, Wallet, Clock } from "lucide-react";
import { fetchData } from "../../utils/fetch";
import { useEffect, useState } from "react";

const features = [
  {
    icon: <Briefcase className="text-blue-500 w-10 h-10" />
  },
  {
    icon: <Users className="text-blue-500 w-10 h-10" />
  },
  {
    icon: <Wallet className="text-blue-500 w-10 h-10" />

  },
  {
    icon: <Clock className="text-blue-500 w-10 h-10" />

  },
];


export default function Jobbanner1() {
    const [data,setdata]=useState<any>()
    async function fetchfromapi(){
     const data1 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/job?populate[jobbanner1][populate]=*`
    );

      setdata(data1.jobbanner1) 

}
    useEffect(()=>{
        fetchfromapi()
        

    },[])
   
  return (
    <section className="bg-[#f8faff] py-20">
   
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          {data?.[0].smalltext}
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
           {data?.[0].title}
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
        {data?.[0].button}
        </button>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.[0].list.map((item:any, i:number) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{features[i].icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
