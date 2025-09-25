import { fetchData } from "../utils/fetch";
import Icon from "./icons";

async function Banner3() {
      const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner3][populate]=*`);
      const data=await data1.banner3[0].list
      console.log(data, "sds");
    return (
        <div className="bg-bg text-base-text px-30   ">
            <div className="grid grid-cols-3 gap-7 text-sm  pb-16 border-b border-b-purple-100">
                {
                    data.map((dt:any,key:number)=>{
                        return <div key={key} className="flex p-0 m-0"> 
                        <div className="flex-2/12">
                        <Icon name={dt.icon} className="text-3xl text-button-purple w-full h-fullp-0 m-0"/>
                        
                        </div>
                         <div className="flex-10/12 flex flex-col jus gap-2 text-xsp-0 m-0 text-sm">
                         <p className="font-medium ">{dt.title}</p>
                          <p className="text-xs text-gray-500">{dt.subtitle}</p>


                         </div>


                        </div>
                    })
                }

            </div>
            
        </div>
    );
}

export default Banner3;