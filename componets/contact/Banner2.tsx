import { fetchData } from "../../utils/fetch";
import Icon from "../resuse/icons";

async function Banner2() {
     const data1 = await fetchData(
        "https://strapi-backend-dbhx.onrender.com/api/contact?populate[contactbanner2][populate]=*"
      );
      const data = await data1.contactbanner2;
      console.log(data, "sds");
          const data3 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner7][populate]=*`
    );
        const colorMap: Record<string, string> = {
        red: "bg-red-400",
        blue: "bg-blue-400",
        green: "bg-green-400",
        orange: "bg-orange-400",
    }
    const iconlist = ['location', 'phone', 'mail'] as const;

type IconName = typeof iconlist[number];

    console.log(data3.aboutbanner7, "sd");
    const data2 = data3.aboutbanner7;
    return (
        <div className="py-[10%] bg-bg flex flex-col md:flex-row  px-[5%] gap-10 justify-center items-center">
             <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 ">
                      {/* LEFT IMAGE GRID */}
                      <div className="lg:basis-1/2 grid grid-cols-1 sm:grid-cols-2 justify-items-start content-end gap-3 sm:gap-4">
                        <div className="sm:row-span-2 w-full flex justify-end h-full my-4 sm:my-6">
                          <img
                            src={data[0].imgs[1].url}
                            alt="bannerimg"
                            className="w-full h-[70vw] sm:h-[50vw] md:h-[40vw] lg:h-[70%] rounded-2xl object-cover"
                          />
                        </div>
            
                        <div className="bg-purple-box w-full sm:w-[90%] rounded-lg flex flex-col justify-center items-center h-40 sm:h-48 md:h-44 px-2">
                          <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center">
                            {data[0].boxtext1}
                          </p>
                          <p className="text-xs sm:text-sm md:text-base text-gray-800 text-center">
                            {data[0].boxtext2}
                          </p>
                        </div>
            
                        <div className="w-full rounded-lg flex flex-col h-40 sm:h-40 md:h-44">
                          <img
                            src={data[0].imgs[2].url}
                            alt="bannerimg"
                            className="w-full h-full rounded-2xl object-cover"
                          />
                        </div>
                      </div>
            
                  
                      <div className=" w-[60%] min-h-fit flex justify-center lg:mt-0 ">
                        <div className="flex  flex-col  justify-start items-start  flex-2/4   gap-5 text-dark-base  px-4 ">
           
                <p className="text-xl lg:text-4xl font-bold  ">
                    {data[0].title}
                </p>
                <div className="text-xl   font-medium grid grid-cols-1   text-gray-500 ">
               
  {
                            data[0].list.map((dt: any, i: number) => {
                                return <div className="flex flex-row w-full  py-4 gap-2  justify-start items-start" key={i}>
                                    <div>
                                        <Icon name={iconlist[i]} className="text-lg sm:text-xl md:text-2xl text-blue-500 w-full h-full my-2" />
                                    </div>
                                    <div className="flex flex-col" >
                                        <p className="  text-lg  font-semibold text-black ">{dt.title}</p>
                                        <p className="text-md text-gray-500  ">{dt.value}</p>

                                    </div>


                                </div>
                            })
                        }
                </div>



            </div>
                      </div>
                    </div>
     
          
           
            
            
        </div>
    );
}

export default Banner2;