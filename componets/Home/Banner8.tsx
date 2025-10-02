import { fetchData } from "../../utils/fetch";
import Socialbar from "../resuse/Socialbar";

async function Banner8() {
  const data1 = await fetchData(
    `https://strapi-backend-dbhx.onrender.com/api/home?populate[banner8][populate]=*`
  );
  console.log(data1.banner8, "sd");
  const data = data1.banner8;
  return (
    <div className=" relative min-h-[60vw] flex flex-col">
      <div className="top-[5vw] left-[4vw] md:top-[4vw] md:left-[4vw]  absolute ">
        <div
          className="max-w-[90vw] md:max-h-fit  lg:max-w-[90vw] lg:max-h-[80vh]  bg-white flex flex-col lg:flex-row  gap-2 md:rounded-xl "
          style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
        >
          <img
            src={data.imgurl}
            className="hidden md:block md:w-full h-[20vh] md:h-[40vh] lg:h-auto lg:flex-2/6 lg:max-w-1/2 lg:max-h-[80vh]  lg:rounded-t-0 lg:rounded-l-2xl  object-cover"
          />
          <div className="flex flex-col justify-center items-center lg:flex-4/6 lg:w-full p-10 md:p-16">
            <div className="flex  flex-col justify-start items-start  flex-1/10   gap-5 text-dark-base  ">
              <p className="text-2xl lg:text-4xl font-medium  font-serif   leading-8">
                {data.textbig}
              </p>
              <p className="text-md lg:text-lg text-light-base font-medium md:w-6/7 font-sans">
                {data.textsmall}
              </p>
              <p className="text-sm text-gray-500 font-medium md:w-6/7">
                {data.textsmall1}
              </p>
              <div className="flex justify-between items-center gap-3  text-sm font-medium ">
                <button className="text-bg bg-button-purple  hover:text-pink-300   px-6 py-3 rounded-full cursor-pointer ">
                  Join us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[85vh] max-h-[50vw] xs:min-h-[100vh] sm:min-h-[80vw] md:min-h-[80vh]  lg:max-h-[80vh] flex flex-col">
        <div className="bg-bg flex-1"></div>
        <div className="bg-purple-box flex-1"></div>
      </div>

      <div className="bg-purple-box  h-auto lg:flex-8 flex justify-start items-center gap-5 flex-col py-10 sm:py-14  font-normal ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:justify-items-center w-full lg:px-34 py-4 gap-5 ">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-lg font-semibold text-gray-700">Address</p>
            {data.footerdata[0].address.map((dt: any, i: number) => {
              return (
                <p key={dt} className="text-sm text-gray-500 font-medium">
                  {dt}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-lg font-semibold text-gray-700 ">Phone</p>
            {data.footerdata[0].Phone.map((dt: any, i: number) => {
              return (
                <p key={dt} className="text-sm text-gray-500 font-medium">
                  {dt}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-lg font-semibold text-gray-700">E-mail</p>
            {data.footerdata[0]["E-mail"].map((dt: any, i: number) => {
              return (
                <p key={dt} className="text-sm text-gray-500 font-medium">
                  {dt}
                </p>
              );
            })}
          </div>
        </div>
        <div className="text-sm text-gray-600 font-medium">
          {data.copyright}
        </div>
        <div className=" flex justify-start gap-1">
          <a href="">
            <Socialbar icon={"twitter"} classname="text-sky-400" />
          </a>

          <a href="">
            <Socialbar icon={"facebook"} classname="text-blue-600" />
          </a>

          <a href="">
            <Socialbar icon={"dribbble"} classname="text-pink-600" />
          </a>
          <a href="">
            <Socialbar icon={"instagram"} classname="text-pink-900" />
          </a>
          <a href="">
            <Socialbar icon={"youtube"} classname="text-red-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner8;
