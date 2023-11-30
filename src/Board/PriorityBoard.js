import React, { useState } from "react";
import { MoreHorizontal, Plus } from "react-feather";
import Card from "../Card";
import { getPriorityIcon } from "../utils";
import Constants from "../Constants";
function PriorityBoard(props) {
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {getPriorityIcon(Constants.priorityOptions[props.priority])}

          <p style={{
            fontWeight: 'normal'
          }}>  {Constants.priorityOptions[props.priority]}</p>
          {<span className="number-of-task">{props.cards?.length || 0}</span>}
        </p>
        <span>
          <Plus size={20} />
          <MoreHorizontal />
        </span>
      </div>
      {props.cards.map((card) => (
        <Card key={card.id} ticket={card} name={props.username[card.userId]} userAvailability={props.userAvailability} />
      ))}
    </div>
  );
}

export default PriorityBoard;
