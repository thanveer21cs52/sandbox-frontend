
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faDribbble } from "@fortawesome/free-brands-svg-icons";
export default function Socialbar({icon}:{icon:string}) {


  const socialIcons = [
    { name: "facebook", icon: faFacebook },
    { name: "twitter", icon: faTwitter },
    { name: "instagram", icon: faInstagram },
    { name: "dribbble", icon: faDribbble },
  ];
  const iconname:any=socialIcons.find((icn:any)=>icn.name==icon)
  console.log(iconname)


  return (
    <div className="p-1">
   
        <FontAwesomeIcon  icon={iconname?.icon} className={`hover:text-button-purple ${icon=='facebook'?'text-blue-600':icon=='twitter'?'text-sky-400':icon=='dribbble'?'text-pink-600':""} w-4 h-4 `} />

    </div>


  );
} 