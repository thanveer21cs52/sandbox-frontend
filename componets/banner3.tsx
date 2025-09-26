import { fetchData } from "../utils/fetch";
import Icon from "./icons";

async function Banner3() {
      const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner3][populate]=*`);
      const data=await data1.banner3[0].list
      console.log(data, "sds");
    return (
        <div className="bg-bg text-base-text px-10 md:px-30 pt-11  lg:pt-0   ">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7 text-sm  pb-16 border-b border-b-purple-100">
                {
                    data.map((dt:any,key:number)=>{
                        return <div key={key} className="flex p-0 m-0 gap-2 lg:gap-0"> 
                        <div className="w-fit lg:flex-2/12">
                        <Icon name={dt.icon} className="text-lg sm:text-xl md:text-2xl text-button-purple w-full h-fullp-0 m-0"/>
                        
                        </div>
                         <div className="flex-10/12 flex flex-col jus gap-2 text-xsp-0 m-0 text-sm">
                         <p className="font-medium ">{dt.title}</p>
                          <p className="text-xs text-gray-500">{dt.subtitle}</p>


                         </div>


                        </div>
                    })
                }

            </div>
            
        </div>
    );
}

export default Banner3;
// import { fetchData } from "../utils/fetch";
// import Icon from "./icons";

// async function Banner3() {
//   const data1 = await fetchData(
//     `https://strapi-backend-dbhx.onrender.com/api/home?populate[banner3][populate]=*`
//   );
//   const data = await data1.banner3[0].list;
//   console.log(data, "sds");

//   return (
//     <div className="bg-bg text-base-text px-6 sm:px-12 md:px-20 lg:px-30 pt-5 md:pt-0">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-sm pb-12 border-b border-b-purple-100">
//         {data.map((dt: any, key: number) => {
//           return (
//             <div key={key} className="flex">
//               {/* Icon */}
//               <div className="flex-2/12">
//                 <Icon
//                   name={dt.icon}
//                   className="text-2xl sm:text-3xl md:text-4xl text-button-purple"
//                 />
//               </div>

//               {/* Text Content */}
//               <div className="flex-10/12 flex flex-col gap-1 sm:gap-2">
//                 <p className="font-medium text-sm sm:text-base md:text-lg">
//                   {dt.title}
//                 </p>
//                 <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-snug">
//                   {dt.subtitle}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Banner3;
