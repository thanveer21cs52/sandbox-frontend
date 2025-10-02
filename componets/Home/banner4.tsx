import { fetchData } from "../../utils/fetch";
import Accordian from "../resuse/accordian";
import Icon from "../resuse/icons";

async function Banner4() {
      const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner4][populate]=*`);
      const data=data1.banner4
      console.log(data, "sds");
    return (
        <div className="bg-bg text-base-text px-10 md:px-30 flex flex-col-reverse md:grid md:grid-cols-2 py-8 ">
            <div className="flex flex-col justify-start gap-4 md:py-18 min-h-[60vh] md:min-h-0 ">
                <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-semibold    w-8/10 leading-10">
            {data.title}
          </p>
                <Accordian data1={data.dropdown} className={'purple'}/>

            </div>
            <div>
                <div className="grid grid-cols-1 sm:px-10 md:px-0 sm:grid-cols-12 justify-start py-12 items-start  flex-5/10  gap-5 text-dark-base ">
        <div className="w-full flex justify-end h-full items-end sm:col-span-5">
             <img src={data.imgurl[0].imgurl} alt="bannerimg"  className="h-full md:h-[90%] rounded-2xl object-cover"/>

        </div>
         <div className="w-full  flex justify-center items-end sm:col-span-7 h-full">
             <img src={data.imgurl[1].imgurl} alt="bannerimg"  className="w-full h-full rounded-2xl object-cover r"/>

         </div>
         <div className="w-full flex sm:col-span-7 ">
            
           <img src={data.imgurl[2].imgurl} alt="bannerimg"  className="w-full h-full rounded-2xl object-cover"/>

         </div>
            <div className="w-full flex justify-center items-center sm:col-span-5 h-full ">
            
           <img src={data.imgurl[3].imgurl} alt="bannerimg"  className="w-full h-full rounded-2xl object-cover"/>

         </div>
          
          
        </div>
            </div>

            
        
 
      
    
          
            
        </div>
    );
}

export default Banner4;