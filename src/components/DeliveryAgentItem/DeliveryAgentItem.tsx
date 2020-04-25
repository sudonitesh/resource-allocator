import React from "react";

import { IDeliveryAgent } from "../../data/delivereyAgents";
import "./deliveryAgentItem.scss";

interface IProps extends IDeliveryAgent {}

const DeliveryAgentItem: React.FC<IProps> = (props: IProps) => {
  const { id, name, avatar } = props;
  return (
    <li key={id} className="item">
      <div className="avatar">
        <img
          src={avatar}
          alt={name[0]}
        />
      </div>
      <div className="priority">
        <div className="bar"> {name} </div>
      </div>
    </li>
  );
};

export default DeliveryAgentItem;
