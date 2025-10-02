import { fetchData } from "../../utils/fetch";
import Icon from "../resuse/icons";
import Scrollbar from "../resuse/Scrollbar";

async function Banner6() {
  const data1 = await fetchData(
    "https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner6][populate]=*"
  );
  const data = await data1.aboutbanner6;
  console.log(data, "sds");

  return (
    <div className="bg-gray-100 text-base-text px-[5%]  py-[10%]">
      <div className="flex flex-col gap-8 sm:gap-12">
        

        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-10">
              <div className="lg:basis-1/2 w-full min-h-fit flex justify-center lg:mt-0 ">
            <Scrollbar data={data.scrolllist}/>
          </div>
          {/* LEFT IMAGE GRID */}
          <div className="md:w-[50%]">
              <div className="min-w-full  flex justify-center">
                    <img src={data.img1.url} alt="" className="w-full  " />
                </div>
        
          </div>

      
        
        </div>

     
        <div className="grid  grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 justify-items-center mx-2 sm:mx-5 mt-10">
          {data.patnersimgs.map((img: any, index: number) => {
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

export default Banner6;
