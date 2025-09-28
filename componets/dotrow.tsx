function Dotrow({no,classname}:{no:number,classname:string}) {
    return (
     <div className="flex gap-3 ">

        {
           Array.from({ length: no }).map((_, i) => {
            return <span className={`w-1 h-1  rounded-full ${classname}`} key={i}></span>
           })
        }
     </div>

 


    
    );
}

export default Dotrow;