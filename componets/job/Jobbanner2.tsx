import { fetchData } from "../../utils/fetch";
import Icon from "../resuse/icons";

async function Jobbanner2() {
     const data1 = await fetchData(
        "https://strapi-backend-dbhx.onrender.com/api/job?populate[jobbanner2][populate]=*"
      );
      const data = await data1.jobbanner2;
      console.log(data, "sds");
    
        const colorMap: Record<string, string> = {
        red: "bg-red-400",
        blue: "bg-blue-400",
        green: "bg-green-400",
        orange: "bg-orange-400",
    }
    const iconlist = ['location', 'phone', 'mail'] as const;

type IconName = typeof iconlist[number];
const svgs=[
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 255.98 245.34"
  className="w-8 h-9 text-blue-500 me-4"
>
  <g data-name="Layer 2">
    <path
      className="fill-gray-400"
      d="M219.1 108.48v7.68A11.89 11.89 0 01207.15 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zm26.24-60.8a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23h-44.06a20 20 0 00-7.79-12.69 47.13 47.13 0 01-18.24-38.4C149.86 21.34 171.09.33 196.58 0a47.34 47.34 0 0134.56 13.88 46.83 46.83 0 0114.2 33.79z"
    />
    <path
      className="fill-blue-500"
      d="M5.25 117.34A5.34 5.34 0 000 122.67v98.64A2.68 2.68 0 002.67 224H28a5.33 5.33 0 005.13-3.87l23.6-83.18A10.66 10.66 0 0050.1 124c-9.67-3.52-24.5-7-44.85-6.66zM234.67 176c-21.33 0-64 27-85.33 27S104 186.65 104 186.65s28.74 5.35 45.33 5.35 21.33-5.66 21.33-13.33c0-18.67-31.72-21.56-47.75-24-15.74-8.76-23.92-15.69-50-17.9a28.85 28.85 0 01-.81 4.54l-21.43 75.5c24.27 11 66.05 28.53 88 28.53 32 0 117.32-42.67 117.32-53.33S245.33 176 234.67 176z"
    />
  </g>
</svg>
,
   <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 256 234.72"
  className="w-8 h-8 text-blue-500 me-4"
>
  <g data-name="Layer 2">
    <path
      className="fill-blue-500"
      d="M5.25 106.72A5.34 5.34 0 000 112.05v98.64a2.68 2.68 0 002.67 2.67H28a5.33 5.33 0 005.13-3.87L56.7 126.3a10.66 10.66 0 00-6.6-12.92c-9.67-3.52-24.5-7-44.85-6.66zm229.42 58.64c-21.33 0-64 27-85.33 27S104 176 104 176s28.74 5.33 45.33 5.33 21.33-5.66 21.33-13.33c0-18.67-31.72-21.57-47.75-24-15.74-8.77-23.92-15.69-50-17.9a28.85 28.85 0 01-.81 4.54l-21.43 75.55c24.27 11 66.05 28.53 88 28.53 32 0 117.32-42.67 117.32-53.33s-10.65-16-21.31-16z"
    />
    <path
      className="fill-blue-100"
      d="M250.75 128a5.34 5.34 0 005.25-5.33V24a2.68 2.68 0 00-2.67-2.67H228a5.33 5.33 0 00-5.13 3.87l-23.6 83.19a10.66 10.66 0 006.6 12.92c9.7 3.55 24.53 7.04 44.88 6.69zM21.33 69.36c21.33 0 64-27 85.33-27S152 58.69 152 58.69s-28.72-5.33-45.31-5.33S85.34 59 85.34 66.69c0 18.67 31.72 21.57 47.75 24 15.74 8.77 23.92 15.69 50 17.9a28.85 28.85 0 01.81-4.54l21.43-75.52C181.06 17.49 139.28 0 117.34 0 85.33 0 0 42.69 0 53.36s10.67 16 21.33 16z"
    />
  </g>
</svg>

]

  
    return (
        <div className="py-[10%] bg-bg flex flex-col md:flex-row  px-[5%] gap-10 justify-center items-center">
             <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 ">
                   
                      <div className="lg:basis-1/2 grid grid-cols-1 sm:grid-cols-2 justify-items-start content-end gap-3 sm:gap-4">
                        <div className="sm:col-span-2 w-full flex justify-end h-full my-4 sm:my-6 lg:px-8">
                          <img
                            src={data.imgs[0].url}
                            alt="bannerimg"
                            className="w-full h-[70vw] sm:h-[50vw] md:h-[40vw] lg:h-52 rounded-2xl object-cover"
                          />
                        </div>
            <div className="w-full rounded-lg flex flex-col h-40 sm:h-40 md:h-44">
                          <img
                            src={data.imgs[1].url}
                            alt="bannerimg"
                            className="w-full h-full rounded-2xl object-cover"
                          />
                        </div>
            
                        <div className="w-full rounded-lg flex flex-col h-40 sm:h-36 md:h-40">
                          <img
                            src={data.imgs[2].url}
                            alt="bannerimg"
                            className="w-full h-full rounded-2xl object-cover"
                          />
                        </div>
                      </div>
            
                  
                      <div className=" w-full  lg:w-[60%] min-h-fit flex justify-center lg:mt-0 ">
                        <div className="flex  flex-col  justify-start items-start   md:flex-2/4   gap-5 text-dark-base  px-4 ">
           
                <p className="text-sm lg:text-lg   text-gray-300 ">
                    {data.smalltext}
                </p>
                 
                   <p className="text-xl lg:text-4xl font-bold  ">
                    {data.title}
                </p>
                  <p className="text-sm   ">
                  Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed.


                </p>
                <div className="text-xl   font-medium grid grid-cols-1 md:grid-cols-2   text-gray-500  gap-3">
               
  {
                            data.list.map((dt: any, i: number) => {
                                return <div className="flex flex-row w-full  py-4 gap-2  justify-start items-start" key={i}>
                                    <div>
                                          {svgs[i]}
                                    </div>
                                    <div className="flex flex-col" >
                                        <p className="  text-md  font-semibold text-black ">{dt.title}</p>
                                        <p className="text-sm text-gray-500  ">{dt.value}</p>

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

export default Jobbanner2;