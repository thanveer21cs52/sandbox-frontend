import { fetchData } from "../../utils/fetch";

async function Banner1() {
      const data1 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner1][populate]=*`
      );
      
      const data = data1.aboutbanner1;
    return (
        <div className="flex-col flex justify-center items-center gap-6 pt-[11%] md:pt-[5%] pb-[50%] px-[5%]   sm:pb-[40%] lg:pb-[25%]  bg-about-blue text-gray-950">
          <p className="text-3xl lg:text-4xl font-semibold   w-full   md:leading-12  text-center ">
           {data.title}
         
          </p>
          <p className=" text-lg sm:text-xl  text-center w-full  ">
        {data.smalltext}
          </p>
        </div>
    );
}

export default Banner1;