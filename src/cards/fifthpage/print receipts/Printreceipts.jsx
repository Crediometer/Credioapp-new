import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import "./Printreceipts.css";
export default function Printreceipts() {
  return (
    <div id="printreceipts">
      <p>Details</p>
      <div>
        <div className="row">
          <div className="col-6">
            <div>
              <p>From:</p>
              <p>Michael</p>
            </div>
            <div>
              <p>Mastercard sign</p>
              <p>*****12345</p>
            </div>
            <div>
              <p>Amount</p>
              <p>
                <TbCurrencyNaira />
                1200
              </p>
            </div>
          </div>
          <div className="col-6">
            <div>
              <p>To:</p>
              <p>Tony T Electrical</p>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <p>Mastercard sign</p>
                <p>*****12345</p>
              </div>
            </div>
            <div>
              <p>Commission</p>
              <p>
                <TbCurrencyNaira />
                1200
              </p>
            </div>
          </div>
          <div>
            <button className="print-btn">Print Receipt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
