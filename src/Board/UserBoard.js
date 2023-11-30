import React, { useState } from "react";
import { MoreHorizontal, Plus, User } from "react-feather";
import Card from "../Card";
import UserIcon from "../UserIcon";
function UserBoard(props) {
  const isUserBoard = true;

  console.log(props.userAvailability);
  return (
    <div className="board">
      <div className="board_header">
        <div className="board_header_title">


          <UserIcon name={props.user.name} available={props.userAvailability[props.user.name]} />
          <p style={{
            fontWeight: 'normal'
          }}>
            {props.user.name}</p>
          {<span className="number-of-task">{props.cards?.length || 0}</span>}
        </div>
        <span>
          <Plus size={20} />
          <MoreHorizontal />
        </span>
      </div>
      {props.cards.map((card) => (
        <Card key={card.id} ticket={card} name={props.user.name} isUserBoard={isUserBoard} userAvailability={props.userAvailability} />
      ))}
    </div>
  );
}

export default UserBoard;
