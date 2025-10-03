import { fetchData } from "../../utils/fetch";

async function Banner1({auth}:{auth:string}) {
      const data1 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner1][populate]=*`
      );
      
      const data = data1.aboutbanner1;
    return (
        <div className="flex-col flex justify-center items-center gap-6 pt-[11%] md:pt-[5%] pb-[50%] px-[5%]   sm:pb-[40%] lg:pb-[25%]  bg-gray-900 text-white">
                 <p className="text-3xl lg:text-5xl font-semibold w-full md:leading-12 text-center">
                    {auth=="signin"&&'Sign in' ||auth=="signup"&&'Sign up' ||"Sign in"}
                </p>
                <div className="text-lg sm:text-xl text-center w-full text-gray-500">
                    <div className="flex gap-2 w-full justify-center items-center">
                        <div>home</div>
                        <div className="text-gray-300">{">"}</div>
                        <div>  {auth=="signin"&&'Sign in' ||auth=="signup"&&'Sign up' ||"Sign in"}</div>
                    </div>
                </div>
        </div>
    );
}

export default Banner1;