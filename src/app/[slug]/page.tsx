import Banner2 from "../../../componets/services/banner2";
import Banner1 from "../../../componets/services/banner1";
import Banner3 from "../../../componets/services/Banner3";
import Banner4 from "../../../componets/services/banner4";
import Banner5 from "../../../componets/services/Banner5";

function page() {
    return (
        <div className="font-manrope">
            <Banner1/>
            <Banner2/>
            <Banner4/>
            <Banner5/>
        </div>
    );
}

export default page;