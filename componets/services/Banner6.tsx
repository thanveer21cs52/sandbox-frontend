import { fetchData } from "../../utils/fetch";
import Icon from "../icons";

async function Banner6() {
   const data1 = await fetchData(
                `https://strapi-backend-dbhx.onrender.com/api/service?populate[servicebanner7][populate]=*`
            );
            console.log(data1.servicebanner7, "sduyu");
            const data = data1.servicebanner7;
  return (
    <div className="lg:px-[15vw] py-24  w-full  bg-white">
      <div 

        className={`w-full h-full   md:bg-[url('https://wruutdkwmulehnkgrwce.supabase.co/storage/v1/object/public/strapi/mapbg.png-b18d0a967f034341449eb7beec70dd99.png')]  bg-no-repeat flex justify-center items-center`}
      >

        <div className=" gap-2 flex flex-col justify-center items-center mx-5 sm:mx-10 md:mx-12 lg:mx-20 sm:p-0 font-manrope h-full text-center ">
          <p className="text-xl text-gray-300 font-bold ">
            {data.title}

          </p>
          <p className="text-2xl lg:text-3xl font-bold  ">
           {data.smalltitle}
          </p>


          <p className="text-lg  font-medium text-gray-500"></p>
          <div className="text-lg   font-medium grid grid-cols-1 sm:grid-cols-3 md:gap-4 text-gray-500 ">
              {data.list.map((dt:any,i:number)=>{
                return  <div className="flex flex-col items-center w-full  py-4 gap-2"  key={i}>
          
              <p className="  text-2xl   font-semibold text-blue-500 ">{dt.no}</p>
              <p className="text-sm text-gray-500">{dt.title}</p>



            </div>
              })}
           
              
          </div>
        </div>

      </div>


    </div>

  );
}

export default Banner6;
