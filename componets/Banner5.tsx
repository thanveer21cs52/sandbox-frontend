import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchData } from "../utils/fetch";

async function Banner5() {
          const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner5][populate]=*`);
          const data=data1.banner5
          console.log(data, "sds");
  return (
    <div className=" px-40  flex flex-col  py-34 justify-center items-center gap-6 ">
      <div className="">
        <div className="relative flex justify-center items-center w-20 h-20">
          <div className="absolute w-[60%] h-[60%] rounded-full bg-bg animate-ping"></div>
          <div className="absolute w-[50%] h-[50%] rounded-full bg-bg animate-pulse"></div>

          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-white z-10">
            <FontAwesomeIcon icon={faPlay} className="text-black text-lg" />
          </div>
        </div>
      </div>
       <div className="flex justify-center items-center">
          <p className=" text-3xl font-semibold  font-serif  w-8/10 leading-12 text-bg text-center">
            {data.title}
          </p>
        </div>
    </div>
  );
}

export default Banner5;
