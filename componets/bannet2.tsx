import { fetchData } from "../utils/fetch";
import Icon from "./icons";

async function Banner2() {
  const data1 = await fetchData('https://strapi-backend-dbhx.onrender.com/api/home?populate[banner2][populate]=*');
  const data=await data1.banner2
  console.log(data, "sds");

  return (
    <div className=" bg-bg text-base-text px-10 lg:px-30 pt-4 pb-4">
      <div className="flex flex-col md:flex-row justify-between sm:gap-5 md:gap-0 lg:gap-10 relative z-10 sm-10 md:px-0">
        <div className="absolute hidden top-1/3 left-1/2 md:top-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 
                  sm:flex items-center justify-center flex-col rounded-full 
                  w-32 h-32 sm:w-36 sm:h-36 md:w-36  md:h-36 
                  bg-button-purple text-bg shadow-lg">
    <p className="text-3xl sm:text-4xl md:text-4xl font-serif font-medium">
      {data.years}
    </p>
    <p className="text-sm sm:text-sm">{data.experince}</p>
  </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-start py-12 sm:px-10   items-start  flex-5/10 gap-3   sm:gap-2 lg:px-4 md:gap-5 text-dark-base ">
        <div className="w-full flex justify-end">
             <img src={data.imgurl[0].imgurl} alt="bannerimg"  className="w-full lg:w-[90%] h-full rounded-2xl object-cover"/>

        </div>
         <div className="w-full sm:row-span-2 flex justify-center items-center h-full">
             <img src={data.imgurl[2].imgurl} alt="bannerimg"  className="w-full h-full sm:h-[90%] rounded-2xl object-cover r"/>

         </div>
         <div className="w-full ">
            
           <img src={data.imgurl[1].imgurl} alt="bannerimg"  className="w-full h-full rounded-2xl object-cover"/>

         </div>
          
          
        </div>
        <div className="flex-5/10 gap-5 flex flex-col justify-center px-2 sm:p-0 ">
          <p className="text-xl lg:text-2xl font-semibold  font-serif  w-8/9 leading-8">
            {data.bigtext}
          </p>
          <p className="text-xs  font-medium text-gray-500">
            {data.smalltext}
          </p> 
          <div className="text-lg   font-medium grid grid-cols-1 lg:grid-cols-2 gap-3 text-gray-500 ">
            {data.list.map((con: any, index: number) => {
              return (
                <div  key={index} className="flex gap-2 justify-center items-center">
                    <div className="rounded-full w-5  h-5 bg-purple-100 flex text-button-purple justify-center items-center">
                          <Icon name="check" className="text-xs "/>

                    </div>
                  
                     <p
                  className="text-xs text-light-base font-medium flex-11/12"
                 
                >
                  {con.content}
                </p>

                </div>
               
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;


