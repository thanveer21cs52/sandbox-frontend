import { notFound } from "next/navigation";
import Service from "../../../componets/services/service";
import About from "../../../componets/About/About";

async function Page({ params }:{params:any}) {
    const slug=(await params).slug
    if(slug=='services'){
          return <Service />;

    }
    else if(slug=="about"){
      return <About/>

    }
    return notFound()

}

export default Page;

export async function generateStaticParams() {
  return [
    { slug: "services" },
    { slug: "about" },

  ];
}
