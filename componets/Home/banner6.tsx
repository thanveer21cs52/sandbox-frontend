import { fetchData } from "../../utils/fetch";
import Icon from "../resuse/icons";
import Socialbar from "../resuse/Socialbar";

async function Banner6() {
        const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner6][populate]=*`);
              const data=data1.banner6
              console.log(data, "sdssdss");
    return (
        <div className="px-10 md:px-30 pt-28 bg-bg flex-col flex gap-15  ">
            <div className="flex flex-col lg:flex-row w-full gap-3 lg:gap-0 ">
                <div className="flex-2/7 flex flex-col gap-2 lg:gap-4 sm:items-center justify-center sm:text-center lg:text-start lg:items-start">
                 <p className="font-semibold text-2xl  lg:text-4xl leading-10 tracking-tight text-base-text">{data.bigtext}</p>
                          <p className="text-xl text-gray-500 font-medium">{data.smalltext}</p>
                </div>
                <div className="flex-9/12 grid grid-cols-1 md:grid-cols-3 md:ps-15 md:pe-5 justify-items-center md:justify-items-end md:items-center  ">
                {
                    data.list.map((dt:any,index:number)=>{
                        return <div className="flex flex-col items-center w-full  py-4 gap-2" key={index}>
                    <Icon name={index==0?'world':index==1?'shield':index==2?'book':'book'} className="text-4xl  text-button-purple w-full h-full p-0 m-0"/>
                    
                     <p className="  text-2xl   font-semibold text-base-text ">{dt.no}</p>
                          <p className="text-lg text-gray-500">{dt.text}</p>



                 </div>
                    })
                }


                 
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center px-2 gap-7">
                {data.profileslist.map((dt:any,index:number)=>{
                    return  <div className=" bg-white rounded-lg w-full  flex flex-col p-7 pt-9 pb-14 gap-4 "  style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }} key={index}>
                    <div className="w-full ">
                       
                            <img src={dt.url} alt=""  className="w-18 h-18 rounded-full"/>
                        

                    </div>
                     <div className="w-full">
                            <p className="  text-lg  font-semibold text-base-text">{dt.name}</p>
                          <p className="text-xs font-sans text-gray-500">{dt.work}</p>
                       
                       
                    </div>
                    <div className="w-full">
                          <p className="text-xs text-gray-500">Fermentum massa justo sit amet risus morbi leo.</p>
                        
                    </div>
                    <div className="w-full flex justify-start gap-1">
                        <a href=""><Socialbar icon={'twitter'}classname="text-sky-400" /></a>
                        
                        <a href=""><Socialbar icon={'facebook'} classname="text-blue-600" /></a>

                      <a href=""><Socialbar icon={'dribbble'} classname="text-pink-600"  /></a>


                    </div>


                </div>
                })}
                 
                     
                
                

          
            </div>
            <div className="border border-gray-100 mt-18"></div>
            
        </div>
    );
}

export default Banner6;