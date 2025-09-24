import { fetchData } from "../utils/fetch";

async function Banner1() {
    
          const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner1][populate]=*`);
      console.log(data1.banner1,"sd");
      const data=data1.banner1

    return (
        <div  className=" bg-bg text-base-text pt-[11vh] pb-8">
            <div className="flex justify-between ">
                            <div className="flex  flex-col justify-start py-12 items-start  flex-5/10   gap-5 text-dark-base ps-36 ">
                < p className=" text-4xl font-semibold  font-serif  w-9/10 leading-12">
                    {data.maintext}
                </p>
                   <p className="text-lg w-4/6 text-light-base font-medium">
                    {data.smalletext}
                </p> 
                <div className="flex justify-between items-center gap-3  text-sm font-medium ">
                    <button className="text-bg bg-button-purple  hover:text-pink-300   px-6 py-3 rounded-full cursor-pointer ">{data.button1}</button>
                     <button className="text-button-purple  border-2 border-button-purple px-6 py-3  hover:text-gray-700 rounded-full cursor-pointer ">{data.button2}</button>
                </div>
            </div>
            <div className="flex-5/10 h-[70vh]">
                <img src={data.url} alt="bannerimg"  className="w-full h-full rounded-s-2xl object-cover"/>
            </div>

            </div>

            
        </div>
    );
}

export default Banner1;