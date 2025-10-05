// components/JobPositionsSection.tsx
"use client";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { fetchData } from "../../utils/fetch";
import { useEffect, useState } from "react";

type Job = {
  id: number;
  title: string;
  type: string;
  location: string;
  badge: string;
  badgeColor: string;
};

type Category = {
  name: string;
  jobs: Job[];
};

const jobData: Category[] = [
  {
    name: "Design",
    jobs: [
      {
        id: 1,
        title: "Senior Graphic Designer",
        type: "Full time",
        location: "San Francisco, US",
        badge: "GD",
        badgeColor: "bg-pink-500",
      },
      {
        id: 2,
        title: "UI/UX Designer",
        type: "Remote",
        location: "Anywhere",
        badge: "UX",
        badgeColor: "bg-green-500",
      },
      {
        id: 3,
        title: "Multimedia Artist & Animator",
        type: "Full time",
        location: "Birmingham, UK",
        badge: "AN",
        badgeColor: "bg-yellow-500",
      },
    ],
  },
  {
    name: "Development",
    jobs: [
      {
        id: 4,
        title: "Front End Developer",
        type: "Part time",
        location: "Sydney, AU",
        badge: "FE",
        badgeColor: "bg-blue-500",
      },
      {
        id: 5,
        title: "Mobile Developer",
        type: "Full time",
        location: "San Francisco, US",
        badge: "MB",
        badgeColor: "bg-red-500",
      },
      {
        id: 6,
        title: ".NET Developer",
        type: "Full time",
        location: "Manchester, UK",
        badge: "NT",
        badgeColor: "bg-purple-500",
      },
    ],
  },
];

export default function Jobbanner3() {
     const [data,setdata]=useState<any>()
        async function fetchfromapi(){
         const data1 = await fetchData(
            `https://strapi-backend-dbhx.onrender.com/api/job?populate[jobbanner3][populate]=*`
        );
    
          setdata(data1.jobbanner3) 
    
    }
        useEffect(()=>{
            fetchfromapi()
            
    
        },[])
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          {data?.smalltext}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
         {data?.title}
        </h2>
     

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-16 px-[10%]">
       <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 lg:w-1/3">
  {data?.selectjson?.[0]?.map((dt: any, i: number) => (
    <option key={i} value={dt}>
      {dt}
    </option>
  ))}
</select>

          <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 lg:w-1/3">
          {data?.selectjson?.[1]?.map((dt: any, i: number) => (
    <option key={i} value={dt}>
      {dt}
    </option>
  ))}
          </select> 
          <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 lg:w-1/3">
            {data?.selectjson?.[2]?.map((dt: any, i: number) => (
    <option key={i} value={dt}>
      {dt}
    </option>
  ))}
          </select>
        </div>

        {/* Jobs by category */}
        <div className="space-y-12 text-left px-[10%]">
          {data?.joblist.map((category:any, i:number) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.jobs.map((job:any) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between bg-bg hover:bg-gray-100 rounded-xl p-3 transition shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`${job.badgeColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold`}
                      >
                        {job.badge}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{job.title}</p>
                        <div className="flex gap-4 text-xs md:text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock size={14} /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} /> {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-gray-400 group-hover:text-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}