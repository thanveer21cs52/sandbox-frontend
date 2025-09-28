import Progressbar from "../Progressbar";

function Banner4() {
  return (
    <div className="flex flex-col lg:flex-row bg-bg gap-14 px-2 md:gap-6 sm:px-10 md:px-10 py-20">
      <div className="flex-3/9">
        <img src="/servicebanner-4.png" alt="" className="  " />
      </div>

      <div className="flex  flex-col justify-start items-start  flex-1/5   gap-5 text-dark-base  px-4 ">
        <p className="text-2xl lg:text-3xl font-bold  ">
          We bring rapid solutions to make the life of our customers easier.
        </p>
        <Progressbar progressbardata={{title:"Marketing",
          classname:'bg-blue-500',percentageincss:'100%'
        }}/>
           <Progressbar progressbardata={{title:"Strategy",
          classname:'bg-orange-400',percentageincss:'80%'
        }}/>
           <Progressbar progressbardata={{title:"Development",
         classname:'bg-red-400',percentageincss:'85%'
        }}/>
           <Progressbar progressbardata={{title:"Data Analysis",
         classname:'bg-green-400' ,percentageincss:'90%'
        }}/>
        
      </div>
    </div>
  );
}

export default Banner4;
