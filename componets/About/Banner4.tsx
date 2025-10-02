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

async function Banner4() {
  const data1 = await fetchData(
    `https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner4][populate]=*`
  );
  const data = data1.aboutbanner4;
  console.log(data, "sds");

  return (
    <div className="bg-gray-100 text-base-text flex flex-col-reverse  lg:flex-row  px-[5%] py-[10%] ">
      <div className="flex flex-col justify-start gap-4 md:py-[10%] ">
        {/* Small label text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-5/10 leading-10 text-blue-600">
          - {data.bluetext}
        </p>

        {/* Main heading text */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold w-8/10 lg:leading-10 ">
          {data.title}
        </p>

        <Accordian data1={data.list} className={"blue"}/>
      </div>

      <div className="py-5">
        <div className="flex justify-center    gap-5 text-dark-base lg:w-[100%] h-full mx-auto">
      
            <img
              src={
                "https://sandbox.elemisthemes.com/assets/img/illustrations/i2@2x.png"
              }
              alt=""
              className=" w-full h-full"
            />
      
        </div>
      </div>
    </div>
  );
}

export default Banner4;
