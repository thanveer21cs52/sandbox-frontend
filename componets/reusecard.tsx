import Icon from "./icons";
import IconProps from './icons'

function Reusecard({icon,maintext,smalltext,iconclass,divclass}:{icon:any,maintext:string,smalltext:string,iconclass:string,divclass:string}) {
    return (
     
              <div className={` rounded-lg w-full  flex flex-col p-7 pt-9 pb-14 gap-4 ${divclass} `}  style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }} >
                                    <div className="w-full  ">
                                            <Icon name={icon} className={iconclass}/>
                                    </div>
                                     <div className="w-full">
                                            <p className="  text-lg  font-semibold text-base-text">{maintext}</p>
                                    </div>
                                    <div className="w-full">
                                          <p className="text-sm text-gray-500">{smalltext}</p>
                                        
                                    </div>
                                </div>

    
          
    );
}

export default Reusecard;