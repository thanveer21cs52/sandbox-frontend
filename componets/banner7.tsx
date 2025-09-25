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
    <div className="bg-bg text-base-text ps-28 pt-28   py-24   ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full justify-center items-center gap-4">
          <p className=" text-4xl font-bold  font-serif  w-9/10 leading-12 text-center">
            {data.bigtext}
          </p>
          <p className="text-xl w-4/6 text-light-base  text-center">
            {data.smalltext}
          </p>
        </div>
        <div className="flex ">
          <div className="flex-3/7 grid grid-cols-2   justify-items-start content-end gap-3 ">
            <div className=" row-span-2  w-full flex justify-end h-full my-7 py-3">
              <img
                src={data.imgsurl[0].url}
                alt="bannerimg"
                className="w-full h-[80%] rounded-2xl object-cover "
              />
            </div>
            <div className="bg-purple-box w-[90%] rounded-lg flex flex-col justify-center items-center h-44 ">
              <p className=" text-3xl font-bold   leading-12 text-center">
                {data.no_projects}
              </p>
              <p className="text-sm  text-gray-800  text-center">
                {data.compledtext}
              </p>
            </div>
            <div className=" w-full rounded-lg flex flex-col  h-44">
              <img
                src={data.imgsurl[1].url}
                alt="bannerimg"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="flex-3/7 w-full flex justify-center">
          <Scrollbar data={data}/>
       
          </div>
          
        </div>

        <div className="grid grid-cols-6 gap-6 mx-5 my-10">
            {data.patnersimg[0].img_urls.map((img:any,index:number)=>{
                return <img
                key={index}
                src={img.url}
                alt="bannerimg"
                className="w-[70%] h-[70%] "
              />
            })}

          </div>
      </div>
    </div>
  );
}

export default Banner7;
