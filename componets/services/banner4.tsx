import { fetchData } from "../../utils/fetch";
import Progressbar from "../resuse/Progressbar";

async function Banner4() {
      const data1 = await fetchData(
          `https://strapi-backend-dbhx.onrender.com/api/service?populate[servicebanner4][populate]=*`
      );
      console.log(data1.servicebanner4, "sd");
      const data = data1.servicebanner4;
          const colorMap: Record<string, string> = {
  red: "bg-red-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
  orange: "bg-orange-400",
}
  return (
    <div className="flex flex-col lg:flex-row bg-bg gap-14 px-3 md:gap-6 sm:px-10 md:px-18 py-20">
      <div className="flex-3/9 md:flex md:justify-center">
        <img src={data.bannerimg.url} alt="" className=" md:w-4/5 lg:w-full " />
      </div>

      <div className="flex  flex-col justify-start items-start  flex-1/5   gap-5 text-dark-base  px-4 ">
        <p className="text-2xl lg:text-3xl font-bold  ">
          {data.title}
        </p>
        {data.list.map((dt:any,i:number)=>{
          return <Progressbar progressbardata={{title:dt.title,
          classname:colorMap[dt.color],percentageincss:dt.percentage,percentage:dt.percentageinno
        }} key={i}/>
        })}
    
      </div>
    </div>
  );
}

export default Banner4;
