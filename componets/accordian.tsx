'use client'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetch'
import { configDotenv } from 'dotenv'
import Icon from './icons'

function Accordian({data1}:{data1:any}) {
 
    const [data,setdata]=useState<any>(null)
     const [openIndex, setOpenIndex] = useState<number | null>(null);
    useEffect(()=>{
        // async function fetch(){
        //      const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner4][populate]=*`);
        //      const data=data1.banner4
        //      console.log(data)
        //   setdata(data)

        // }
       setdata(data1)
         

    },[])
     const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // close if same item clicked
  };
    
  return (
 <div className="">
    {data!=null&&
     <div className=''>
           
         {data.dropdown.map((item:any, index:number) => (
        <div
          key={index}
          className=" transition-all"
        >
       
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex gap-2 items-center p-1 cursor-pointer"
          >
             <span
              className={`transform transition-transform ${
                openIndex === index ? "rotate-180 " : ""
              }`}
            >
              <Icon name='downarr' className='text-xs text-purple-400'/>
            </span>
            <span className={`text-xs  text-gray-600 font-bold ${openIndex === index ? "text-purple-400 " : ""}`}>
              {item.title || `Item ${index + 1}`}
            </span>
           
          </button>

       
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"
            }`}
          >
            <p className="text-xs leading-relaxed">
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