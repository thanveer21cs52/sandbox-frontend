import { fetchData } from "../../utils/fetch";
import Icon from "../icons";
import Progressbar from "../Progressbar";
   const data1 = await fetchData(
          `https://strapi-backend-dbhx.onrender.com/api/service?populate[servicebanner5][populate]=*`
      );
      console.log(data1.servicebanner5, "sd");
      const data = data1.servicebanner5;

function Banner5() {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-bg gap-14 px-3 md:gap-6 sm:px-10 md:px-10 py-20 lg:px-18">
      <div className="flex  flex-col justify-start items-start  flex-1/5   gap-5 text-dark-base  px-4 ">
        <div className=" gap-5 flex flex-col justify-center px-2 sm:p-0 font-manrope ">
          <p className="text-2xl lg:text-3xl font-bold  ">
         {data.title}
        </p>
          <p className="text-lg  font-medium text-gray-500">{data.textsmall}</p>
          <div className="text-lg   font-medium grid grid-cols-1 lg:grid-cols-2 gap-3 text-gray-500 ">
            {data.list.map((con: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex gap-3 justify-center items-center"
                >
                  <div className="rounded-full w-5  h-5 bg-blue-100 flex text-button-purple justify-center items-center">
                    <Icon name="check" className="text-xs " />
                  </div>

                  <p className="text-sm text-light-base font-medium flex-11/12">
                    {con.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
   <div className="flex-3/9 md:flex md:justify-center">
        <img src={data.bannerimg.url} alt="" className=" md:w-4/5 lg:w-full " />
      </div>
    </div>
  );
}

export default Banner5;
