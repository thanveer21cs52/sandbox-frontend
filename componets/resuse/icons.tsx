"use client";

import { fa42Group } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-regular-svg-icons/faHome";
import { faAngleDown, faBars, faBook, faBookSkull, faCheck, faGlobe, faLocation, faMailBulk, faPhone, faQuoteLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import { faShieldBlank } from "@fortawesome/free-solid-svg-icons/faShieldBlank";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const icons = {
  check: faCheck,
 home:faHome,
 shield:faShieldBlank,
 message:faMessage,
 book:faBook,
 setting:faGear,
 world:faGlobe,
 downarr:faAngleDown,
 quote:faQuoteLeft,
 notcheck:faXmark,
 location:faLocation,
 mail:faMailBulk,
 phone:faPhone,
 bar:faBars
};

 type IconProps = {
  name: keyof typeof icons; 
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  return <FontAwesomeIcon icon={icons[name]} className={className} />;
}
