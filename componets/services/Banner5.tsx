import { fetchData } from "../../utils/fetch";
import Icon from "../icons";
import Progressbar from "../Progressbar";
const data1 = await fetchData(
  "https://strapi-backend-dbhx.onrender.com/api/home?populate[banner2][populate]=*"
);
const data = await data1.banner2;
console.log(data, "sds");

function Banner5() {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-bg gap-14 px-2 md:gap-6 sm:px-10 md:px-10 py-20">
      <div className="flex  flex-col justify-start items-start  flex-1/5   gap-5 text-dark-base  px-4 ">
        <div className=" gap-5 flex flex-col justify-center px-2 sm:p-0 font-manrope ">
          <p className="text-2xl lg:text-3xl font-bold  ">
          We bring rapid solutions to make the life of our customers easier.
        </p>
          <p className="text-lg  font-medium text-gray-500">{data.smalltext}</p>
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
                    {con.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
      <div className="flex-3/9">
          <img src="/servicebanner-5.png" alt="" className="  " />
        </div>
    </div>
  );
}

export default Banner5;
