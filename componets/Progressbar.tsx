function Progressbar({progressbardata}:{progressbardata:any}) {
    return (
       <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <div>{progressbardata.title}</div>
            <div>{progressbardata.percentageincss}</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-300">
            <div className={` h-1 rounded-full ${progressbardata.classname} `} style={{
                width:`${progressbardata.percentageincss}`
            }}></div>
          </div>
        </div>
    );
}

export default Progressbar;