import React from "react";
import FooterNav from "../component/footerNav";
import HeaderNav from "../component/headerNav";
import Mydetails from "../component/mydetailContainer";


const LandingPage =()=>{
    return(
        <section>
            <HeaderNav/>
            <Mydetails/>
            <FooterNav/>
        </section>
    )
}

export default LandingPage