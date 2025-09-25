
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faDribbble, faYoutube } from "@fortawesome/free-brands-svg-icons";
export default function Socialbar({icon,classname=''}:{icon:string,classname:string}) {


  const socialIcons = [
    { name: "facebook", icon: faFacebook },
    { name: "twitter", icon: faTwitter },
    { name: "instagram", icon: faInstagram },
    { name: "dribbble", icon: faDribbble },
    { name: "youtube", icon: faYoutube },
  ];
  const iconname:any=socialIcons.find((icn:any)=>icn.name==icon)
  console.log(iconname)


  return (
    <div className="p-1">
   
        <FontAwesomeIcon  icon={iconname?.icon} className={`hover:text-button-purple ${classname} w-4 h-4 `} />

    </div>


  );
} 