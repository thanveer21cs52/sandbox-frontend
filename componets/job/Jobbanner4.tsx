import { fetchData } from "../../utils/fetch";

async function Jobbanner4() {
       const data1 = await fetchData(
            "https://strapi-backend-dbhx.onrender.com/api/job?populate[jobbanner4][populate]=*"
          );
          const data = await data1.jobbanner4;
    return (
        <div className="bg-[#f8faff] px-[10%]">
              <div className="max-w-6xl mx-auto px-6 text-center py-20">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
         {data.smalltext}
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
       {data.title}
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          {data.button}
        </button>
        </div>

        </div>
          
    );
}

export default Jobbanner4;