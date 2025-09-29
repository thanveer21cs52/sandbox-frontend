// import { fetchData } from "../utils/fetch";
// import Icon from "./icons";
// import Scrollbar from "./Scrollbar";

// async function Banner7() {
//   const data1 = await fetchData(
//     "https://strapi-backend-dbhx.onrender.com/api/home?populate[banner7][populate]=*"
//   );
//   const data = await data1.banner7;
//   console.log(data, "sds");
//   return (
//     <div className="bg-bg text-base-text px-10 lg:ps-28 pt-28   py-24   ">
//       <div className="flex flex-col gap-10">
//         <div className="flex flex-col w-full justify-center items-center gap-4">
//           <p className=" text-4xl font-bold  font-serif  w-9/10 leading-12 text-center">
//             {data.bigtext}
//           </p>
//           <p className="text-xl w-4/6 text-light-base  text-center">
//             {data.smalltext}
//           </p>
//         </div>
//         <div className="flex flex-col lg:flex-row ">
//           <div className="lg:flex-3/7 grid grid-cols-2   justify-items-start content-end gap-3 ">
//             <div className=" row-span-2  w-full flex justify-end h-full my-7 py-3">
//               <img
//                 src={data.imgsurl[0].url}
//                 alt="bannerimg"
//                 className="w-full h-[80%] rounded-2xl object-cover "
//               />
//             </div>
//             <div className="bg-purple-box w-[90%] rounded-lg flex flex-col justify-center items-center h-44 ">
//               <p className=" text-3xl font-bold   leading-12 text-center">
//                 {data.no_projects}
//               </p>
//               <p className="text-sm  text-gray-800  text-center">
//                 {data.compledtext}
//               </p>
//             </div>
//             <div className=" w-full rounded-lg flex flex-col  h-44">
//               <img
//                 src={data.imgsurl[1].url}
//                 alt="bannerimg"
//                 className="w-full h-full rounded-2xl object-cover"
//               />
//             </div>
//           </div>
//           <div className="lg:flex-3/7 w-full flex justify-center">
//           <Scrollbar data={data}/>
       
//           </div>
          
//         </div>

//         <div className="grid  grid-cols-1 sm:grid-cols-3 justify-items-center gap-10 lg:grid-cols-6 lg:gap-6 mx-5 my-10">
//             {data.patnersimg[0].img_urls.map((img:any,index:number)=>{
//                 return <img
//                 key={index}
//                 src={img.url}
//                 alt="bannerimg"
//                 className= "md:max-w-1/2 md:max-h-1/2 lg:w-[60%] lg:h-[60%] "
//               />
//             })}

//           </div>
//       </div>
//     </div>
//   );
// }

// export default Banner7;


import { fetchData } from "../utils/fetch";
import Icon from "./icons";
import Scrollbar from "./Scrollbar";

async function Banner7() {
  const data1 = await fetchData(
    "https://strapi-backend-dbhx.onrender.com/api/home?populate[banner7][populate]=*"
  );
  const data = await data1.banner7;
  console.log(data, "sds");

  return (
    <div className="bg-bg text-base-text px-4 sm:px-6 lg:px-20 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-24">
      <div className="flex flex-col gap-8 sm:gap-12">
        {/* --- HEADER TEXT --- */}
        <div className="flex flex-col w-full justify-center items-center gap-3 sm:gap-4 px-2">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  max-w-[90%] leading-snug sm:leading-snug lg:leading-tight text-center">
            {data.bigtext}
          </p>
          <p className="text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-3/4 text-light-base text-center">
            {data.smalltext}
          </p>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* LEFT IMAGE GRID */}
          <div className="lg:basis-1/2 grid grid-cols-1 sm:grid-cols-2 justify-items-start content-end gap-3 sm:gap-4">
            <div className="md:row-span-2 w-full flex justify-end h-full my-4 sm:my-6">
              <img
                src={data.imgsurl[0].url}
                alt="bannerimg"
                className="w-full h-[70vw] sm:h-[50vw] md:h-[40vw] lg:h-[70%] rounded-2xl object-cover"
              />
            </div>

            <div className="bg-purple-box w-full sm:w-[90%] rounded-lg flex flex-col justify-center items-center h-40 sm:h-40 md:h-44 px-2">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center">
                {data.no_projects}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-800 text-center">
                {data.compledtext}
              </p>
            </div>

            <div className="w-full rounded-lg flex flex-col h-40 sm:h-40 md:h-44">
              <img
                src={data.imgsurl[1].url}
                alt="bannerimg"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>

      
          <div className="lg:basis-1/2 w-full min-h-fit flex justify-center lg:mt-0 ">
            <Scrollbar data={data} />
          </div>
        </div>

     
        <div className="grid  grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 justify-items-center mx-2 sm:mx-5 mt-10">
          {data.patnersimg[0].img_urls.map((img: any, index: number) => {
            return (
              <img
                key={index}
                src={img.url}
                alt="partner"
                className="max-w-[40%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[60%] h-auto object-contain"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Banner7;
