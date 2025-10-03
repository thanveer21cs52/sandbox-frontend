import { fetchData } from "../../utils/fetch";
import Progressbar from "../resuse/Progressbar";
import Socialbar from "../resuse/Socialbar";

async function Banner2({auth}:{auth:any}) {
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
    
    return (

        <div className={`flex flex-col  bg-bg gap-6  md:gap-6  py-20 relative pt-[90%] md:pt-[50%] lg:pt-[40%] px-[5%] ${auth=='signup'&&'pt-[120%] '} >`}>
            <div className= {`absolute  sm:-top-7/12 md:-top-7/12 lg:-top-4/12 mx-2 w-full -left-2 ${auth=='signup'?'-top-1/4 ': '-top-4/11'}`}>
                <div className="min-w-full  flex justify-center">
                    <section className=" flex items-center justify-center px-4">
                        <div className="max-w-5xl w-full bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                        
                            <div className="hidden md:block">
                                <img
                                    src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                                    alt="Sign in illustration"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                        
                            <div className="flex flex-col justify-center p-8 sm:p-12">
                                <h2 className="text-sm sm:text-sm font-semibold mb-2">
                                    Welcome Back
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Fill your email and password to sign in.
                                </p>

                                <form className="space-y-5">
                                     {auth == "signup"&& <input
                                        type="text"
                                        placeholder="name"
                                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-sm"
                                        autoComplete="current-password"
                                    />}
                                    {/* Email */}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none  placeholder:text-sm"
                                        autoComplete="email"
                                    />

                                    {/* Password */}
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-sm"
                                        autoComplete="current-password"
                                    />
                                     {auth == "signup"&& <input
                                        type="password"
                                        placeholder="confirm Password"
                                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-sm"
                                        autoComplete="current-password"
                                    />}

                                    {/* Button */}
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-md"
                                    >
                                       {auth=="signin"&&'Sign in' ||auth=="signup"&&'Sign up' ||"Sign in"}
                                    </button>
                                </form>

                                {/* Forgot + Sign up */}
                                <div className="flex justify-between flex-col gap-2 items-center mt-4 text-sm">
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Forgot Password?
                                    </a>
                                    {auth == "signin"&&<p>
                                        Don’t have an account?{" "}
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Sign up
                                        </a>
                                    </p>}
                                      {auth == "signup"&&<p>
                                          Already have an account?{" "}
                                        <a href="#" className="text-blue-600 hover:underline">
                                           Sign in
                                        </a>
                                    </p>}
                           
                                </div>

                                {/* Divider */}
                                <div className="my-6 flex items-center">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="px-4 text-gray-500">or</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>


                                <div className="flex justify-center gap-4 items-center">
                                    <button className="p-1 px-2  rounded-full border h-fit hover:bg-gray-100 bg-red-500" >
                                        <Socialbar icon="google" classname=' text-white p-0 m-0 text-sm' />
                                    </button>
                                    <button className="p-1 px-2  rounded-full border h-fit hover:bg-gray-100 bg-blue-500" >
                                        <Socialbar icon="facebook" classname=' text-white p-0 m-0 text-sm' />
                                    </button>
                                    <button className="p-1 px-2  rounded-full border h-fit hover:bg-gray-100 bg-sky-400" >
                                        <Socialbar icon="twitter" classname=' text-white p-0 m-0 text-sm' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}



export default Banner2;