import React, { useState, useEffect } from "react";

import { IDeliveryAgent } from "../../data/delivereyAgents";
import DeliveryAgentItem from "../DeliveryAgentItem";
import "./card.scss";

interface IProps {
  deliveryAgentsData: IDeliveryAgent[]
}

const Card: React.FC<IProps> = (props: IProps) => {
  const { deliveryAgentsData } = props
  const [deliveryAgents, setDeliveryAgents] = useState<IDeliveryAgent[]>([]);

  useEffect(() => {
    setDeliveryAgents(deliveryAgentsData)
  }, [deliveryAgentsData])

  return (
    <div className="card">
      <ul>
        {deliveryAgents.map(({ id, name, avatar }: IDeliveryAgent) => (
          <DeliveryAgentItem key={id} id={id} name={name} avatar={avatar} />
        ))}
      </ul>
    </div>
  );
};

export default Card;
