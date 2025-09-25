import { fetchData } from "../utils/fetch";
import Socialbar from "./Socialbar";

export default async function Header() {
  const data1 = await fetchData(
    `https://strapi-backend-dbhx.onrender.com/api/home?populate[header][populate]=*`
  );
  console.log(data1.header);
  const data = await data1.header;

  return (
    <header className="w-full bg-bg  p-2 flex items-center justify-between min-h-[10vh] md:px-28 text-base-text py-4 fixed z-30">
      <div className="p-2 ">
        <img src={data.url} alt="logo" className="h-5 w-28 cursor-pointer" />
      </div>

      <nav className="hidden md:flex items-center gap-8  text-xs md:text-sm md:font-semibold font-medium ">
        <div className="hover:text-button-purple">
          <a href="/">{data.nav[0].content1}</a>
        </div>
        <div className="hover:text-button-purple">
          <a href="/">{data.nav[0].content2}</a>
        </div>
        <div className="hover:text-button-purple">
          <a href="/">{data.nav[0].content3}</a>
        </div>
        <div className="hover:text-button-purple">
          <a href="/">{data.nav[0].content4}</a>
        </div>
        <div className="hover:text-button-purple">
          <a href="/">{data.nav[0].content5}</a>
        </div>
        <div className="hover:text-button-purple">
          <a href="/">{data.nav[0].content6}</a>
        </div>
      </nav>

      <div className="flex md:flex items-center gap-1">
        {Object.entries(data.social[0]).map(
          ([key, value]: [string, any], index: number) => {
            if (index === 0) return null;
            if (!value) return null;

            return (
              <a href="/" key={index}>
                <Socialbar icon={value} classname="" />
              </a>
            );
          }
        )}
      </div>
    </header>
  );
}
