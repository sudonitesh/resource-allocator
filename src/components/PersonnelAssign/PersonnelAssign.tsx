import React, { useState } from "react";
import deliveryAgentsData, { IDeliveryAgent } from "../../data/delivereyAgents";

import Card from "../Card";
import "./PersonnelAssign.scss";

const PersonnelAssign: React.FC = () => {
  const [unassignedPersonnel, setUnassignedPersonnel] = useState<
    IDeliveryAgent[]
  >(deliveryAgentsData);
  const [assignedPersonnel, setAssignedPersonnel] = useState<IDeliveryAgent[]>(
    []
  );

  const assignPersonnelHandler = () => {
    const pId = unassignedPersonnel[0].id;
    setAssignedPersonnel([...assignedPersonnel, unassignedPersonnel[0]]);
    setUnassignedPersonnel(
      unassignedPersonnel.filter((item) => item.id !== pId)
    );
  };

  const revokePersonnelHandler = () => {
    const pId = assignedPersonnel[0].id;
    setUnassignedPersonnel([...unassignedPersonnel, assignedPersonnel[0]]);
    setAssignedPersonnel(assignedPersonnel.filter((item) => item.id !== pId));
  };

  return (
    <div className="personnelAssign">
      <div className="row">
        <div className="column">
          <Card deliveryAgentsData={unassignedPersonnel} />
        </div>
        <div className="column">
          <button
            title={
              unassignedPersonnel.length === 0
                ? "No personnel to assign"
                : "Assign Personnel"
            }
            onClick={assignPersonnelHandler}
            className="btn assign"
            disabled={!unassignedPersonnel.length}
          >
            Assign &gt;&gt;
          </button>
          <button
            title={
              assignedPersonnel.length === 0
                ? "No personnel to revoke"
                : "Revoke Personnel"
            }
            onClick={revokePersonnelHandler}
            className="btn revoke"
            disabled={!assignedPersonnel.length}
          >
            &lt;&lt; Revoke
          </button>
        </div>
        <div className="column">
          <Card deliveryAgentsData={assignedPersonnel} />
        </div>
      </div>
    </div>
  );
};

export default PersonnelAssign;
