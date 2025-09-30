import { notFound } from "next/navigation";
import Service from "../../../componets/services/service";

async function Page({ params }:{params:any}) {
    const slug=(await params).slug
    if(slug=='services'){
          return <Service />;

    }
    return notFound()

}

export default Page;

export async function generateStaticParams() {
  return [
    { slug: "services" },
  ];
}
