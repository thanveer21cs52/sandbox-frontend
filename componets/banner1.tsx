// import { fetchData } from "../utils/fetch";

// async function Banner1() {
    
//           const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner1][populate]=*`);
//       console.log(data1.banner1,"sd");
//       const data=data1.banner1

//     return (
//         <div  className=" bg-bg text-base-text pt-[11vh] pb-8">
//             <div className="md:flex flex flex-col  justify-between  ">
//                             <div className="flex  flex-col justify-start py-12 items-start  flex-5/10   gap-5 text-dark-base ps-30 ">
//                 < p className=" text-4xl font-semibold  font-serif  w-9/10 leading-12">
//                     {data.maintext}
//                 </p>
//                    <p className="text-lg w-4/6 text-light-base font-medium">
//                     {data.smalletext}
//                 </p> 
//                 <div className="flex justify-between items-center gap-3  text-sm font-medium ">
//                     <button className="text-bg bg-button-purple  hover:text-pink-300   px-6 py-3 rounded-full cursor-pointer ">{data.button1}</button>
//                      <button className="text-button-purple  border-2 border-button-purple px-6 py-3  hover:text-gray-700 rounded-full cursor-pointer ">{data.button2}</button>
//                 </div>
//             </div>
//             <div className="flex-5/10 h-[70vh] flex justify-end py-2">
//                 <img src={data.url} alt="bannerimg"  className="md:w-[95%] md:h-[98%] w-full  rounded-s-2xl object-cover"/>
//             </div>

//             </div>

            
//         </div>
//     );
// }

// export default Banner1;


import { fetchData } from "../utils/fetch";

async function Banner1() {
  const data1 = await fetchData(
    `https://strapi-backend-dbhx.onrender.com/api/home?populate[banner1][populate]=*`
  );
  console.log(data1.banner1, "sd");
  const data = data1.banner1;

  return (
    <div className="bg-bg text-base-text pb-8 pt-2">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-2 lg:gap-8 md:gap-4 ">
    
        <div className="flex flex-col justify-center py-5 lg:py-8 items-center lg:justify-start lg:items-start gap-5 text-dark-base px-10 md:px-3  sm:px:18 lg:px-24 xl:px-24 lg:w-1/2 text-start">
          <p className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold font-serif leading-8 text-center lg:text-start sm:leading-10 md:leading-8 lg:leading-10 w-full  ">
            {data.maintext}
          </p>
          <p className="text-sm sm:text-lg md:text-lg lg:text-xl w-full text-center lg:text-start lg:w-4/6 text-light-base font-medium">
            {data.smalletext}
          </p>
          <div className="flex flex-row sm:flex-row justify-center text-xs items-center   sm:items-start gap-3 sm:text-base font-medium w-full sm:w-auto">
            <button className="text-bg bg-button-purple text-sm sm:text-sm lg:text-lg hover:text-pink-30 px-2 py-2  sm:px-6 sm:py-3 rounded-full cursor-pointer w-full sm:w-auto text-center">
              {data.button1}
            </button>
            <button className="text-button-purple border-2 text-sm  md:text-sm lg:text-lg border-button-purple px-2 py-2 sm:px-6 sm:py-3 hover:text-gray-700 rounded-full cursor-pointer w-full sm:w-auto text-center">
              {data.button2}
            </button>
          </div>
        </div>

       <div className="lg:w-1/2 w-full h-[42vh] sm:h-[50vw] md:h-[40vh] lg:h-[40vw] xl:h-[30vw] flex justify-center md:justify-end md:px-0 rounded-sm md:rounded-s-4xl lg:rounded-s-4xl ">
  <img
    src={data.url}
    alt="bannerimg"
    className="w-full h-full object-cover  lg:rounded-bl-3xl lg:rounded-tl-3xl"
    
  />
</div>

      </div>
    </div>
  );
}

export default Banner1;
