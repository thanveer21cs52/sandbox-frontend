import Dotrow from "../dotrow";
import Icon from "../icons";
import Reusecard from "../reusecard";

function Banner2() {
    return (
        <div className="flex flex-col-reverse lg:flex-row bg-white  md:px-20 lg:px-10">
            <div className="flex flex-col justify-center items-center lg:flex-4/10  p-10 lg:p-16">
            <div className="flex  flex-col justify-start items-start  flex-1/10   gap-5 text-dark-base  ">
              <p className="text-xl text-gray-300 font-bold md:w-6/7">
              What We Do?
            
              </p>
              <p className="text-2xl lg:text-4xl font-bold  ">
               The service we offer is specifically designed to meet your needs.
              </p>
              <p className="text-md  text-light-base font-medium  ">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </p>
            
              <div className="flex justify-between items-center gap-3  text-sm font-medium ">
                <button className="text-bg bg-gray-950  hover:text-pink-300   px-6 py-3 rounded-full cursor-pointer ">
                  Join us
                </button>
              </div>
            </div>
          </div>


              <div className=" flex flex-col  py-10 px-4 lg:px-0 gap-5 lg:flex-4/10">
                <div className="flex flex-col md:flex-row  gap-5">
                     {
                ["bg-orange-100","bg-pink-100"].map((icon:any,i:number)=>{
                    return  <Reusecard icon="setting" iconclass="text-4xl" divclass={`${icon} ${(i+1)%2!=0?'min-w-1/4 ':'w-full'} px-5 ` } maintext="24/7 Support" smalltext="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta." key={i}/>
                })
            }

                </div>
                <div className="flex flex-col md:flex-row  gap-5">
                       {
                ["bg-green-100","bg-blue-100"].map((icon:any,i:number)=>{
                    return  <Reusecard icon="setting" iconclass="text-4xl" divclass={`${icon} ${(i+1)%2!=0?'col-span-2 ':'col-span-3'} px-5 ` } maintext="24/7 Support" smalltext="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta." key={i}/>
                })
            }
           

                </div>

         
           

            </div>

        </div>
      
            
     
    );
}

export default Banner2;