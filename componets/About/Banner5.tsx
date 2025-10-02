// import { fetchData } from "../../utils/fetch";
// import Accordian from "../resuse/accordian";
// import Icon from "../resuse/icons";

// async function Banner4() {
//       const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner4][populate]=*`);
//       const data=data1.banner4
//       console.log(data, "sds");
//     return (
//         <div className="bg-about-blue text-base-text  flex flex-col-reverse md:grid md:grid-cols-2 py-8 px-[5%] md:px-[10%]">
//             <div className="flex flex-col justify-start gap-4 md:py-18 min-h-[60vh] md:min-h-0 ">
//                 <p className="text-md md:text-lg lg:text-xl font-semibold    w-5/10 leading-10 text-blue-600">
//                - why we choose us
//           </p>
//                 <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-semibold    w-8/10 lg:leading-10">
//             {data.title}
//           </p>
//                 <Accordian data1={data}/>

//             </div>
//             <div>
//                 <div className="flex justify-center items-center sm:px-10 md:px-0 sm:grid-cols-12  py-12  flex-5/10  gap-5 text-dark-base ">
//                     <div className="min-w-full  flex justify-center">
//                     <img src={'https://wruutdkwmulehnkgrwce.supabase.co/storage/v1/object/public/strapi/servicebanner-4.png-b90d9db011ab860fdc73d1a8c93de04f.png'} alt="" className="w-full  " />
//                 </div>
          
          
//         </div>
//             </div>

            
        
 
      
    
          
            
//         </div>
//     );
// }

// export default Banner4;

import { fetchData } from "../../utils/fetch";
import Accordian from "../resuse/accordian";
import Icon from "../resuse/icons";
import Image from "next/image";
import Scrollbar from "../resuse/Scrollbar";
import Multipleslider from "../resuse/Multipleslider";

async function Banner5() {
  const data1 = await fetchData(
    `https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner5][populate]=*`
  );
  const data = data1.aboutbanner5;
  console.log(data, "sds");
    const data3 = await fetchData(
    "https://strapi-backend-dbhx.onrender.com/api/home?populate[banner7][populate]=*"
  );
  const data2 = await data3.banner7;
  console.log(data2, "sds");

  return (
    <div className="bg-bg text-base-text flex flex-col lg:flex-row  px-[5%] py-[10%]  gap-5">
      <div className="flex flex-col justify-start gap-4 md:py-18  lg:min-h-[60vh] lg:w-[40%]">
        {/* Small label text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-10 text-blue-600">
          - {data[0].bluetext}
        </p>

        {/* Main heading text */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold lg:leading-10">
          {data[0].title}
        </p>
        <p className="text-sm font-semibold ">
         {data[0].smalltext}
        </p>
          <button className="text-bg bg-gray-950  hover:text-pink-300   px-6 py-3 rounded-full cursor-pointer w-fit">
                 {data[0].button}
                </button>
      </div>

      <div className="w-full lg:max-w-[60%] h-fit py-3">
       <Multipleslider data={data[0].list}/>
      </div>
    </div>
  );
}

export default Banner5;

