// "use client";
// import { useRef, useState, useEffect } from "react";
// import Icon from "./icons";

// export default function Scrollbar({ data }: { data: any }) {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);


//   useEffect(() => {
//     if (sliderRef.current) {
//       sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
//       sliderRef.current.style.transition = "transform 0.3s ease-out";
//     }
//   }, [currentIndex]);

//   return (
//     <div className="flex flex-col w-full justify-center items-center select-none gap-2 px-10">
 
//       <div className="flex w-full overflow-hidden h-44 md:h-72 rounded-lg">
//         <div
//           ref={sliderRef}
//           className="flex w-full flex-nowrap"
//         >
//           {data.scroll_list.map((item: any, i: number) => (
//             <div
//               key={i}
//               className="flex-none w-full flex flex-col justify-center items-center gap-5 px-2"
//             >
//               <Icon name="quote" className="text-4xl text-gray-200" />
//               <p className="text-lg  w-full text-light-base text-center">
//                 "{item.quote}"
//               </p>
//               <div className="w-full flex flex-col justify-center items-center gap-2">
//                 <p className="text-sm font-bold text-base-text">
//                   {item.name}
//                 </p>
//                 <p className="text-sm  text-gray-500">{item.work}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//       <div className="flex gap-3 mt-4">
//         {data.scroll_list.map((_: any, i: number) => (
//           <button key={i} onClick={() => setCurrentIndex(i)}>
//             {currentIndex !== i ? (
//               <div className="w-2 h-2 rounded-full transition-all bg-gray-300"></div>
//             ) : (
//               <div className="w-2 h-2 rounded-full transition-all bg-gray-300 flex justify-center items-center">
//                 <div className="w-1 h-1 rounded-full transition-all bg-gray-100"></div>
//               </div>
//             )}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useRef, useState, useEffect } from "react";
import Icon from "./icons";

export default function Scrollbar({ data }: { data: any }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      sliderRef.current.style.transition = "transform 0.3s ease-out";
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col w-full justify-center min-h-fit items-center select-none gap-2 px-4 sm:px-6 md:px-10">
      
      <div className="flex w-full overflow-hidden h-52 sm:h-52 md:h-72 lg:h-80 xl:h-96 rounded-lg">
        <div
          ref={sliderRef}
          className="flex w-full flex-nowrap"
        >
          {data.scroll_list.map((item: any, i: number) => (
            <div
              key={i}
              className="flex-none w-full flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 px-2 sm:px-4 md:px-6"
            >
              <Icon name="quote" className="text-2xl sm:text-3xl md:text-4xl text-gray-200" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full text-light-base text-center leading-relaxed">
                "{item.quote}"
              </p>
              <div className="w-full flex flex-col justify-center items-center gap-1 sm:gap-2">
                <p className="text-xs sm:text-sm md:text-base font-bold text-base-text">
                  {item.name}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-500">{item.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
        {data.scroll_list.map((_: any, i: number) => (
          <button key={i} onClick={() => setCurrentIndex(i)}>
            {currentIndex !== i ? (
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all bg-gray-300"></div>
            ) : (
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all bg-gray-300 flex justify-center items-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all bg-gray-100"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

