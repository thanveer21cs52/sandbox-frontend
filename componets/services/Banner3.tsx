function Banner3() {
    return (
        <div className=" bg-red-100 flex justify-start items-center w-full relative  ">   
        <div className=" left-0 w-60 h-60 rounded-full" style={{
                 backgroundImage:
              "repeating-linear-gradient(125deg, #60a5fa 0px,#60a5fa 2px, transparent 3px, transparent 10px)",
          
          
             }}></div>
           
        
                <video src="/movie.mp4" className="w-[60%] rounded-2xl absolute z-10" controls></video>
            
          
        </div>
    );
}

export default Banner3;