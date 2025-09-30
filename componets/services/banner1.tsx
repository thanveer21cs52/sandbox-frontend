import { fetchData } from "../../utils/fetch";

async function banner1() {
  const data1 = await fetchData(
    `https://strapi-backend-dbhx.onrender.com/api/service?populate[servicebanner1][populate]=*`
  );
  console.log(data1.servicebanner1, "sd");
  const data = data1.servicebanner1;

    return (
     
   
       <div className="flex-col flex justify-center items-center gap-6 py-[25vh]  mx-auto sm:px-[10vw] lg:px-[20vw]">
          <p className="text-4xl lg:text-4xl font-semibold   w-full   md:leading-12 text-bg text-center ">
            {data.title1}
         
          </p>
          <p className=" text-xl sm:text-xl  text-center   w-full  text-bg">
             {data.title2}
          </p>
        </div>

    );
}

export default banner1;