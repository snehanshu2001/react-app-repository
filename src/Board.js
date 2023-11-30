import React, { useState } from "react";
import { MoreHorizontal, Plus } from "react-feather";
import Card from "./Card";
function Board(props) {
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          <MoreHorizontal />
          {props.board?.title}
          {/* <span>{props.board?.cards?.length || 0}</span> */}
        </p>
        <span>
          <Plus size={20} />
          <MoreHorizontal />
        </span>
      </div>
    </div>
  );
}

export default Board;
