// "use client";
// import { useRef, useState, useEffect } from "react";
// import Socialbar from "./Socialbar";

// export default function Multipleslider({ data }: { data: any[] }) {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(3);

//   // Handle responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setVisibleSlides(1);
//       else if (window.innerWidth < 840) setVisibleSlides(2);
//       else if (window.innerWidth < 1500) setVisibleSlides(3);
//       // else setVisibleSlides(3);

//       setCurrentIndex(0); // reset when resizing
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Next / Prev
//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       Math.min(prev + 1, data.length - visibleSlides)
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   // Slide effect
//   useEffect(() => {
//     if (scrollRef.current) {
//       const slideWidth = scrollRef.current.offsetWidth / visibleSlides;
//       scrollRef.current.scrollTo({
//         left: currentIndex * slideWidth,
//         behavior: "smooth",
//       });
//     }
//   }, [currentIndex, visibleSlides]);

//   return (
//     <div className="relative w-full px-3 md:px-1">
//       {/* Slides */}
//       <div ref={scrollRef} className="flex overflow-hidden scroll-smooth">
//         {data.map((dt, i) => (
//           <div
//             key={i}
//             className="flex-none w-full sm:w-1/2 md:w-1/3  flex flex-col items-center p-4 gap-4 rounded-lg"
//           >
//             <img
//               src={dt.url}
//               alt={dt.name}
//               className="w-40 h-40 rounded-full object-cover"
//             />
//             <div className="text-center">
//               <p className="text-lg font-semibold">{dt.name}</p>
//               <p className="text-xs text-gray-500">{dt.work}</p>
//             </div>
//             <p className="text-center text-xs text-gray-500 w-1/2 md:w-full">
//               {dt.desc}
//             </p>
//             <div className="flex justify-center gap-2">
//               <Socialbar icon="twitter" classname="text-sky-400" />
//               <Socialbar icon="facebook" classname="text-blue-600" />
//               <Socialbar icon="dribbble" classname="text-pink-600" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Prev / Next Buttons */}
//       <button
//         onClick={handlePrev}
//         disabled={currentIndex === 0}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={handleNext}
//         disabled={currentIndex >= data.length - visibleSlides}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
//       >
//         &#8594;
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center gap-2 mt-4">
//         {Array.from({ length: Math.ceil(data.length / visibleSlides) }).map(
//           (_, i) => (
//             <button key={i} onClick={() => setCurrentIndex(i)}>
//               {currentIndex !== i ? (
//                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//               ) : (
//                 <div className="w-2 h-2 rounded-full bg-gray-300 flex justify-center items-center">
//                   <div className="w-1 h-1 rounded-full bg-gray-100"></div>
//                 </div>
//               )}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useRef, useState, useEffect } from "react";
import Socialbar from "./Socialbar";

export default function Multipleslider({ data }: { data: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 840) setVisibleSlides(2);
      else if (window.innerWidth < 1500) setVisibleSlides(3);
      else setVisibleSlides(4);

      setPageIndex(0); // reset when resizing
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / visibleSlides);

  // Next / Prev → move by page
  const handleNext = () => {
    setPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  // Slide effect
  useEffect(() => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: pageIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [pageIndex, visibleSlides]);

  return (
    <div className="relative w-full px-3 md:px-1">
      {/* Slides */}
      <div ref={scrollRef} className="flex overflow-hidden scroll-smooth">
        {data.map((dt, i) => (
          <div
            key={i}
            style={{ flex: `0 0 ${100 / visibleSlides}%` }}
            className="flex flex-col items-center p-4 gap-4 rounded-lg"
          >
            <img
              src={dt.url}
              alt={dt.name}
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="text-lg font-semibold">{dt.name}</p>
              <p className="text-xs text-gray-500">{dt.work}</p>
            </div>
            <p className="text-center text-xs text-gray-500 w-1/2 md:w-full">
              {dt.desc}
            </p>
            <div className="flex justify-center gap-2">
              <Socialbar icon="twitter" classname="text-sky-400" />
              <Socialbar icon="facebook" classname="text-blue-600" />
              <Socialbar icon="dribbble" classname="text-pink-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next Buttons */}
      {/* <button
        onClick={handlePrev}
        disabled={pageIndex === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        disabled={pageIndex >= totalPages - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
      >
        &#8594;
      </button> */}

      {/* Dots (page-based) */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => setPageIndex(i)}>
            {pageIndex !== i ? (
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-gray-300 flex justify-center items-center">
                <div className="w-1 h-1 rounded-full bg-gray-100"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

