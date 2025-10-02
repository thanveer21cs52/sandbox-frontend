'use client'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/fetch'
import Icon from './icons'

function Accordian({data1,className}:{data1:any,className:any}) {
  const [data,setdata]=useState<any>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(()=>{
    setdata(data1)
  },[])

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {data!=null &&
        <div>
          {data.map((item:any, index:number) => (
            <div key={index} className="transition-all">
              
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex gap-2 items-center p-2 cursor-pointer"
              >
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <Icon name='downarr' className='text-sm text-purple-400'/>
                </span>

                {/* Title text - bumped up */}
                <span className={`text-sm md:text-base font-bold text-gray-700 ${
                  openIndex === index
                    ? (className=="blue" ? "text-blue-500" : "text-button-purple")
                    : ""
                }`}>
                  {item.title || `Item ${index + 1}`}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"
                }`}
              >
                {/* Body text - larger for readability */}
                <p className="text-sm md:text-base leading-relaxed w-full text-gray-600 lg:w-2/3">
                  {item.value || "No content available."}
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Accordian
