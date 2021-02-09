import React from "react";
import { ReactComponent as Line1 } from "./icon/Line 7.svg";
import { ReactComponent as Line2 } from "./icon/Line 5.svg";
import { ReactComponent as Line3 } from "./icon/Line 8.svg";
import { ReactComponent as Line4 } from "./icon/Line 6.svg";
import { ReactComponent as MasterCardSvg } from "./icon/master-card.svg";
import "../styles/credit-card.sass";

const CreditCard = (props) => {
  return (
    <div className="credit-card">
      <div className="credit-card-lines">
        <Line1 className="line-1" />
        <Line2 className="line-2" />
        <Line3 className="line-3" />
        <Line4 className="line-4" />
        <MasterCardSvg className="master-card" />
      </div>
      <div className="inputs">
        <div className="card-input">
          <span>Card Number</span>
          <input placeholder="0123-4567-8910-1112"/>
        </div>
        <div className="card-input">
          <span>Name</span>
          <input placeholder="Tom Thompson"/>
        </div>
        <div className="card-input">
          <div className="card-input-inline">
            <span>Exp.date</span>
            <input placeholder="--/--"/>
          </div>
          <div className="card-input-inline">
            <span>CVC</span>
            <input placeholder="1234"/>
          </div>
        </div>
      </div>
      <div className="card-data">
            <span className="name">{props.name ?? "Buy"}</span>
            <span className="price">{props.price ?? "-$"}</span>
            <div className="buy-button" onClick={props.setChange && props.setChange(false)}>
                <span>Accapt</span>
            </div>
        </div>
    </div>
  );
};

export default CreditCard;
