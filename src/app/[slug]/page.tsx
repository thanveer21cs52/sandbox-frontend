export const dynamic = 'force-static';
import { notFound } from "next/navigation";
import Service from "../../../componets/services/service";
import About from "../../../componets/About/About";
import Contact from "../../../componets/contact/Contact";
import Signinandout from "../../../componets/Auth/signinandout";
import Job from "../../../componets/job/Job";
import Shop from "../../../componets/shop/Shop";

async function Page({ params }:{params:any}) {
    const slug=(await params).slug
    if(slug=='services'){
          return <Service />;

    }
    else if(slug=="about"){
      return <About/>

    }
    else if(slug=="contact"){
      return <Contact/>

    }
     else if(slug=="signin" || slug=="signup"){
      return <Signinandout auth={slug=="signin" &&'signin'|| slug=="signup" &&'signup'||""}/>

    }
     else if(slug=="job" ){
      return <Job/>

    }
     else if(slug=="shop" ){
      return <Shop/>

    }

    return notFound()

}

export default Page;

export async function generateStaticParams() {
  return [
    { slug: "services" },
    { slug: "about" },
    { slug: "contact" },
    { slug: "signin" },
    { slug: "signup" },
    { slug: "job" },
    { slug: "Shop" },

  ];
}

export const revalidate = 60;
