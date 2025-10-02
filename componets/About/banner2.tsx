import { fetchData } from "../../utils/fetch";
import Progressbar from "../resuse/Progressbar";

async function Banner2() {
    const data1 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner2][populate]=*`
    );
    console.log(data1.aboutbanner2, "sd");
    const data = data1.aboutbanner2;
    const colorMap: Record<string, string> = {
        red: "bg-red-400",
        blue: "bg-blue-400",
        green: "bg-green-400",
        orange: "bg-orange-400",
    }
    const data2 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/service?populate[servicebanner3][populate]=*`
    );
    console.log(data2.servicebanner3, "sd");
    const data3 = data2.servicebanner3;
    const svgs = [
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 409.6 362.5"
  className="w-12 h-12 text-blue-600 mb-3"
  fill="none"
  stroke="currentColor"
>
  <path
    d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
  className="fill-black"
 
  />
  <path
    d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
   className="fill-black"
  />
  <path
    d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
    fill="currentColor"
  />
  <path
    d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
 className="fill-black"
  />
  <path
    d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
 className="fill-black"
  />
</svg>

        ,
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  className="w-12 h-12 text-green-600 mb-3"
>
  {/* Outer Circle */}
  <circle
    cx="283.8"
    cy="283.8"
    r="143"
    className="fill-green-600"
  ></circle>

  {/* Main outline */}
  <path
    d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
className="fill-black"
  ></path>

  {/* Middle ring */}
  <path
    d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
    className="fill-green-600"
  ></path>

  {/* Inner circle stroke */}
  <path
    d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
className="fill-black"
  ></path>

  {/* Small dart / target mark */}
  <path
    d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
    className="fill-green-600"
  ></path>

  {/* Full outline */}
  <path
    d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
   className="fill-black"
  ></path>
</svg>
,
       <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 427.5"
  className="w-12 h-12 text-yellow-500 mb-3"
>
  {/* Monitor base */}
  <path
    d="M186.9 353.4h138.3V413H186.9z"
    className="fill-yellow-400"
  ></path>

  {/* Monitor body */}
  <path
    d="M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"
className="fill-black"
  ></path>

  {/* Gear fill */}
  <path
    d="M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"
    className="fill-yellow-300"
  ></path>

  {/* Gear outline */}
  <path
    d="M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"
className="fill-black"
  ></path>
</svg>,
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 431.2"
      className="w-10 h-10 text-orange-400"
      fill="currentColor"
    >
      <path
        className="lineal-fill"
        d="M125.8 121.3h86.6v296.4h-86.6zM299 13.5h86.6v404.2H299z"
      />
      <path
       className="fill-black"
        d="M498.5 404.2h-11.8V161.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v242.5h-59.6V94.3h73.1c7.4 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-74.1V13.5c0-7.4-6-13.5-13.5-13.5H299c-7.4 0-13.5 6-13.5 13.5v134.8h-59.7v-27c0-7.4-6-13.5-13.5-13.5h-73.6V33.7c0-7.4-6-13.5-13.5-13.5H38.7c-7.4 0-13.5 6-13.5 13.5v294.4c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V47.2h59.7v357.1H13.5c-7.4.2-13.3 6.4-13.1 13.8.2 7.2 6 12.9 13.1 13.1h485.1c7.4-.2 13.3-6.4 13.1-13.8-.3-7.2-6-13-13.2-13.2zM139.3 134.7H199v269.5h-59.7V134.7zm86.6 40.5h59.7v229h-59.7v-229zm86.6 229V27h59.7v377.2h-59.7z"
      />
    </svg>



    ]
    return (

        <div className="flex flex-col  bg-bg gap-6  md:gap-6  py-20 relative pt-[30%] md:pt-[20%] lg:pt-[22%] px-[5%] ">
            <div className=" absolute -top-1/10 md:-top-1/4 xl:-top-1/3 mx-2 w-full -left-2">
                <div className="min-w-full  flex justify-center">
                    <img src={data.img1.url} alt="" className="w-[80%] sm:w-[50%]  " />
                </div>

            </div>



            <div className="flex  flex-col-reverse md:flex-row  justify-center items-center  flex-1/5   md:gap-4 text-dark-base   ">
                <div className="flex flex-col  gap-5">
                    <p className="text-xl lg:text-3xl font-bold w-full mt-5">
                        {data.title}
                    </p>
                    <p className="text-md text-gray-600  text-start mr-2 w-8/9">
                        {data.smalltext}
                    </p>


                </div>
                <div className="flex flex-col w-full gap-3">
                    {data.chartdata.map((dt: any, i: number) => {
                        return <Progressbar progressbardata={{
                            title: dt.title,
                            classname: colorMap[dt.color], percentageincss: dt.percentage, percentage: dt.percentageinno
                        }} key={i} />
                    })}

                </div>




            </div>



            <div className="text-lg   font-medium grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1  text-gray-500 ">
                {/* {data3.json.map((dt: any, i: number) => {
                            return <div className="flex flex-col items-center w-full  py-4 gap-2 text-center" key={i}>
                                {svgs[i]}
                                <p className="  text-xl   font-semibold text-black ">{dt.title}</p>
                                <p className="text-sm text-gray-500  md:w-5/8">{dt.text}</p>
                            </div>
                        })} */}
                        {
                            data.list.map((dt: any, i: number) => {
                                return  <div className="flex flex-col items-center w-full  py-4 gap-2 text-center" key={i}>
                    {svgs[i]}
                    <p className="  text-xl   font-semibold text-black ">{dt.title}</p>
                    <p className="text-sm text-gray-500 w-4/5  md:full">{dt.text}</p>
                </div>
                            })
                        }
               
                
            </div>





        </div>
    );
}



export default Banner2;