

import Icon from "../icons";
import Ticklist from "../ticklist";
import Pricing from "../Pricing";
import { fetchData } from "../../utils/fetch";

async function Banner8() {
       const data1 = await fetchData(
              `https://strapi-backend-dbhx.onrender.com/api/service?populate[servicebanner6][populate]=*`
          );
          console.log(data1.servicebanner6, "sduyu");
          const data = data1.servicebanner6;
    
    return (
        <div className="   w-full ">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex  flex-col justify-center items-center  p-10 pb-44   gap-10 text-dark-base text-center bg-blue-50 w-full ">
                    <p className="text-xl text-gray-400 font-bold md:w-6/7">
                        {data[0].smalltitle} 

                    </p>
                    <p className="text-2xl lg:text-4xl font-semibold  ">
                        {data[0].bigtitle}
                    </p>
                    <div>

                    </div>
                   
                    

                </div>
                <div className="w-full">
                     {data&&<Pricing data={data[0]}/>}
                </div>

            </div>

        </div>
    );
}

export default Banner8;