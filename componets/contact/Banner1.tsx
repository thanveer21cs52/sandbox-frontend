import { fetchData } from "../../utils/fetch";

async function Banner1() {
    const data1 = await fetchData(
        `https://strapi-backend-dbhx.onrender.com/api/aboutpage?populate[aboutbanner1][populate]=*`
    );

    const data = data1.aboutbanner1;
    return (
        <div className="relative overflow-hidden bg-bg  px-[5%]">
            {/* Skewed background */}
            <div className="absolute inset-0 -skew-y-6 md:-skew-y-3 origin-top-left bg-about-blue"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-center items-center gap-6  py-[30%] md:px-[10%]  md:pt-[12%] md:pb-[14%] text-gray-950 ">
                <p className="text-3xl lg:text-5xl font-semibold w-full md:leading-12 text-center">
                    Get in touch
                </p>
                <div className="text-lg sm:text-xl text-center w-full text-gray-500">
                    <div className="flex gap-2 w-full justify-center items-center">
                        <div>home</div>
                        <div className="text-gray-300">{">"}</div>
                        <div>contact</div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Banner1;