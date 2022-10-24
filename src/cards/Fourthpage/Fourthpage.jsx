import React from "react";
import Firstrow from "../thirdpage/firstcolumn/firstrow/Firstrow";
import NairaComp from "./NairaComp/NairaComp";
import Payment from "./Payment/Payment";
export default function Fourthpage() {
  return (
    <div>
      <div>
        <h4>Transferring Between Accounts</h4>
      </div>
      <div>
        <Firstrow />
        <NairaComp/>
        <Payment/>
      </div>
    </div>
  );
}
