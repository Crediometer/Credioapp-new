import React from "react";
import MobileHeader from "./Mobile/MobileHeader/MobileHeader";
import MobileInput from "./Mobile/MobileInput/MobileInput";
import "./OverviewMobile.css";
import FirstrowComp1 from "./FirstCol/Firstrow/FirstrowComp1";
import Icons from "./Mobile/icons/Icons";
import Firstrow from "./SecondCol/firstrow/Firstrow";
import Secondrow from "./FirstCol/Secondrow/Secondrow";
export default function OverviewMobile() {
  return (
    <div className="bg-light">
      <MobileHeader />
      <div>
        <MobileInput />
      </div>
      <div className="mx-1">
        <div className="mb-4 ">
          <FirstrowComp1 />
        </div>
        <div>
          <Icons />
        </div>
        <div>
          <Firstrow />
        </div>
        <div style={{backgroundColor:'white', boxShadow:'1px 1px 3px black', borderRadius:'5px', fontSize:'13px'}}>
          <Secondrow />
        </div>
      </div>
    </div>
  );
}
