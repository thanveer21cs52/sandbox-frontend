import Icon from "../resuse/icons";
import Socialbar from "../resuse/Socialbar";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

function Signinandout({auth}:{auth:string}) {
    
    return (
        <div className="font-manrope ">
            <Banner1 auth={auth}/>
            <Banner2 auth={auth}/>

        </div>
       
    );
}

export default Signinandout;