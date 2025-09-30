import {  headers } from "next/headers";
import { fetchData } from "../utils/fetch";
import Socialbar from "./Socialbar";
import Link from "next/link";


export default async function Header() {
  const header=headers()
  const host=(await header).get('host')
  console.log("----------------------------------------------",host)
  const data1 = await fetchData(
    `https://strapi-backend-dbhx.onrender.com/api/home?populate[header][populate]=*`
  );
  console.log(data1.header);
  const data = await data1.header;

  return (
    <header className={`sticky top-0 left-0 w-full bg-bg z-30 font-manrope `}>
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-14 lg:px-24 max-h-[75px] py-3">
        {/* Logo */}
        <a className="p-2" href="/">
          <img
            src={data.url}
            alt="logo"
            className="h-[5vw] sm:h-6 md:h-7 lg:h-8 w-auto cursor-pointer object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm md:text-base font-medium md:font-semibold">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="hover:text-button-purple transition-colors">
              <Link href="/services">{data.nav[0][`content${i}`]}</Link>
            </div>
          ))}
        </nav>

    
        <div className="flex items-center gap-2 sm:gap-3">
          {Object.entries(data.social[0]).map(
            ([key, value]: [string, any], index: number) => {
              if (index === 0 || !value) return null;
              return (
                <a href="/" key={index}>
                  <Socialbar icon={value} classname="hover:scale-110 transition-transform" />
                </a>
              );
            }
          )}
        </div>
      </div>
    </header>
  );
}
