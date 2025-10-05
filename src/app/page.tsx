export const dynamic = 'force-static';
import Image from "next/image";
import Header from "../../componets/resuse/header";
import Banner1 from "../../componets/Home/banner1";
import Banner2 from "../../componets/Home/bannet2";
import Banner3 from "../../componets/Home/banner3";
import Banner4 from "../../componets/Home/banner4";
import Banner5 from "../../componets/Home/Banner5";
import Banner6 from "../../componets/Home/banner6";
import VideoPlayer from "../../componets/resuse/videopop";
import Banner7 from "../../componets/Home/banner7";
import Banner8 from "../../componets/Home/Banner8";
import Socialbar from "../../componets/resuse/Socialbar";


export default function Home() {
  
  return (
    <div className="min-h-screen scroll-smooth">
      
      <Banner1/>
      <Banner2/>
      <Banner3/>
          <Banner4/>
          <Banner5/>
          <Banner6/>
            <Banner7/>
            <Banner8/>
            
                </div>
       
       
          
  

  );
}

export const revalidate = 60;
