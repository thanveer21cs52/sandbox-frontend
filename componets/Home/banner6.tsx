import { fetchData } from "../../utils/fetch";
import Icon from "../resuse/icons";
import Socialbar from "../resuse/Socialbar";

async function Banner6() {
        const data1 = await fetchData(`https://strapi-backend-dbhx.onrender.com/api/home?populate[banner6][populate]=*`);
              const data=data1.banner6
              console.log(data, "sdssdss");

              const icons=[
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 409.6 409.6"
  className="w-8 h-8 text-button-purple mb-3"
>
  <path
    className="lineal-stroke"
    d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
  />
  <path
    className="fill-button-purple"
    d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
  />
  <path
    className="lineal-stroke"
    d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
  />
  <path
    className="lineal-stroke"
    d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
  />
</svg>,
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 441.4 512"
  className="w-8 h-8 text-button-purple mb-3"
>
  <path
    className="fill-button-purple"
    d="M254.9 457c-14.9-8.1-24.1-23.7-24.1-40.6V285.6c26.5 11.1 57.1 4.9 77.1-15.6-19-26.2-49.3-41.6-81.6-41.6H115.7c-55.7 0-100.9 45.2-100.9 100.9v167.9h312.4v-.8L254.9 457z"
  />
  <path
    className="lineal-stroke"
    d="M426.6 270.8c-8.2 0-14.8 6.6-14.9 14.8v130.7c0 11.5-6.3 22.1-16.4 27.6l-66.7 36.3-66.6-36.3c-10.1-5.5-16.4-16.1-16.4-27.6V305c4.1.6 8.2.9 12.3.9 1.3 0 2.5 0 3.8-.1h1c1.1-.1 2.2-.1 3.4-.2l1.6-.2 1.6-.2c15-2 29.3-8 41.1-17.5l1.1-.9 1.3-1.1c.9-.7 1.7-1.5 2.5-2.2l.4-.4c1-.9 1.9-1.8 2.8-2.7 3.8-3.9 7.2-8.1 10.1-12.6 7.2 10.9 16.8 19.9 28 26.5 7.1 4.1 16.2 1.8 20.3-5.3 4.1-7.1 1.8-16.2-5.3-20.3-10-5.9-17.9-14.8-22.6-25.5-2.4-5.4-7.7-8.8-13.6-8.9h-13.5c-5.9 0-11.2 3.5-13.6 8.9-.5 1-.9 2-1.4 3-12.8-12.4-28.4-21.7-45.4-27.2 17.4-16.5 27.2-39.4 27.2-63.3V87.5c-.2-8.2-7-14.7-15.2-14.5-7.9.2-14.3 6.6-14.5 14.5v68.3c0 31.6-25.5 57.4-57.1 57.8h-62c-31.6-.5-57-26.2-57-57.8V87.5c0-31.9 25.9-57.8 57.8-57.8h60.5c8.2-.2 14.7-7 14.5-15.2-.2-7.9-6.6-14.3-14.5-14.5h-60.5C92.5.1 53.3 39.2 53.3 87.5v68.3c0 23.9 9.8 46.8 27.2 63.3C32.6 234.5.1 279 0 329.3v167.9c0 8.2 6.6 14.8 14.8 14.8h313.9c2.5 0 4.9-.6 7.1-1.8l73.8-40.2c19.6-10.7 31.9-31.3 31.9-53.6V285.6c-.1-8.2-6.7-14.8-14.9-14.8zM29.7 482.3v-153c.1-47.5 38.5-85.9 86-86h40.4v144.1c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8V243.3h40.4c22.6 0 44.3 9 60.4 24.8-6.3 3.9-13.3 6.4-20.6 7.5h.1c-1.1.2-2.3.3-3.5.4l-.6.1c-1.2.1-2.5.1-3.7.1h-.2c-7.3 0-14.6-1.4-21.4-4.3-7.5-3.2-16.3.3-19.4 7.9-.8 1.8-1.2 3.8-1.2 5.8v130.7c0 22.4 12.2 42.9 31.8 53.7l22.6 12.3H29.7z"
  />
  <path
    className="lineal-stroke"
    d="M327.2 405.9c-2.5 0-5-.6-7.2-1.9l-24.9-13.9c-7.2-4-9.7-13-5.7-20.2s13-9.7 20.2-5.7l15.7 8.7 34.1-30.1c6.1-5.4 15.5-4.9 21 1.3 5.4 6.1 4.9 15.5-1.3 21l-42 37.1c-2.8 2.4-6.3 3.7-9.9 3.7z"
  />
</svg>,
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 409.6 380.8"
  className="w-8 h-8 text-button-purple mb-3"
>
  <path
    className="lineal-stroke"
    d="M299.9 104.7h-23.8V56.5c0-18.1-14.6-32.7-32.7-32.7h-77.2c-18 0-32.7 14.7-32.7 32.7v48.2h-23.8V56.5C109.8 25.3 135 0 166.2 0h77.2c31.2 0 56.4 25.3 56.5 56.5v48.2z"
  />
  <path
    className="lineal-stroke"
    d="M360.5 380.8H49.1c-27.1 0-49-22-49.1-49.1V119.1C0 92 22 70 49.1 70h311.5c27.1 0 49 22 49.1 49.1v212.7c-.1 27.1-22.1 49-49.2 49zM49.1 93.8c-14 0-25.3 11.3-25.3 25.3v212.7c0 14 11.3 25.3 25.3 25.3h311.5c14 0 25.3-11.3 25.3-25.3V119.1c0-14-11.3-25.3-25.3-25.3H49.1z"
  />
  <path
    className="fill-button-purple"
    d="M49.2 81.7c-18.4 0-33.3 14.8-33.3 33.2 0 2.7.3 5.3.9 7.9C35.4 197.9 103.6 254 184.2 254h41.2c80.6 0 148.8-56.1 167.3-131.2 4.3-17.8-6.6-35.8-24.5-40.2-2.6-.6-5.2-.9-7.9-.9H49.2z"
  />
  <path
    className="lineal-stroke"
    d="M225.4 265.9h-41.2c-41.5-.1-81.8-14.2-114.3-40C38 200.5 15.3 165.2 5.4 125.6-.5 101.4 14.3 77 38.6 71.1c3.5-.9 7.1-1.3 10.7-1.3h311.1c24.9 0 45.2 20.2 45.2 45.1 0 3.6-.4 7.2-1.3 10.7-9.9 39.6-32.6 74.8-64.5 100.2-32.6 25.9-72.9 40-114.4 40.1zM49.2 93.6c-6.6 0-12.9 3-16.9 8.2-4.1 5.1-5.5 11.8-3.9 18.2 17.6 71.8 81.9 122.3 155.8 122.2h41.2c73.9.1 138.3-50.4 155.8-122.2 1.6-6.3.1-13-3.9-18.1-4.1-5.2-10.3-8.3-16.9-8.2l-311.2-.1z"
  />
  <path
    className="fill-button-purple"
    d="M128.5 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
  />
  <path
    className="lineal-stroke"
    d="M128.5 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
  />
  <path
    className="fill-button-purple"
    d="M294.9 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
  />
  <path
    className="lineal-stroke"
    d="M294.9 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
  />
</svg>



              ]
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
                    {/* <Icon name={index==0?'world':index==1?'shield':index==2?'book':'book'} className="text-4xl  text-button-purple w-full h-full p-0 m-0"/> */}
                    {icons[index]}
                    
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
                          <p className="text-xs font-manrope text-gray-500">{dt.work}</p>
                       
                       
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