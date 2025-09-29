import { fetchData } from "../../utils/fetch";
import Socialbar from "../Socialbar";

async function Banner7() {
    const data1 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/home?populate[banner8][populate]=*`
    );
    console.log(data1.banner8, "sd");
    const data = data1.banner8;
    return (
        <div className="lg:px-[5vw] py-18  w-full  bg-footer-color">
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 text-white justify-items-start gap-3  px-5">
                <div className="flex flex-col justify-start items-start md:items-start w-2/4 gap-3 " >

                    <div className="w-full">
                        <img
                            src={'/lightlogo.png'}
                            alt="logo"
                            className="h-[5vw] sm:h-6 md:h-7 lg:h-8 w-auto cursor-pointer object-contain"
                        />
                    </div>
                    <p className="text-sm">© 2025 Sandbox rights reserved.</p>

                    <div className=" flex justify-center md:justify-start gap-1">
                        <a href="">
                            <Socialbar icon={"twitter"} classname="text-white" />
                        </a>

                        <a href="">
                            <Socialbar icon={"facebook"} classname="text-white" />
                        </a>

                        <a href="">
                            <Socialbar icon={"dribbble"} classname="text-white" />
                        </a>
                        <a href="">
                            <Socialbar icon={"instagram"} classname="text-white" />
                        </a>
                        <a href="">
                            <Socialbar icon={"youtube"} classname="text-white" />
                        </a>
                    </div>



                </div>
                <div className="flex flex-col justify-start items-start gap-1 w-1/2 ">
                    <p className="text-xl font-semibold ">Address</p>
                    <p className="text-sm  text-gray-300 ">
                        Moonshine St. 14/05 Light City, London, United Kingdom
                    </p>
                    <p className="text-sm  text-gray-300">
                        info@email.com
                    </p>
                    <p className="text-sm  text-gray-300">
                        00 (123) 456 78 90

                    </p>

                </div>
                <div className="flex flex-col justify-start items-start gap-1 w-1/2">
                    <p className="text-xl font-semibold ">Learn More</p>
                    <p className="text-sm  text-gray-300 ">
                        About Us

                    </p>
                    <p className="text-sm  text-gray-300">
                        Our Story

                    </p>
                    <p className="text-sm  text-gray-300">
                        Projects


                    </p>
                    <p className="text-sm  text-gray-300">
                        Terms of Use


                    </p>
                    <p className="text-sm  text-gray-300">
                        Privacy Policy


                    </p>

                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-3/4">
                    <p className="text-xl font-semibold ">Our Newsletter</p>
                    <p className="text-sm  text-gray-300 ">
                        Subscribe to our newsletter to get our news & deals delivered to you.
                    </p>
                      <div className="text-sm  text-gray-300 min-w-fit border border-gray-300 flex rounded-sm">
                        <input type="text" name="" id="" className="py-2 ps-1 focus:outline-0 flex-2/5"  placeholder="Email Addess "/>
                        <button className="bg-blue-600  rounded-r-sm text-medium text-white flex-2/5 px-2" type="submit">Join</button>
                        
                    </div>


                </div>


            </div>





        </div>
    );
}

export default Banner7;