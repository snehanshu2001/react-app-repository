import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoreHorizontal, Plus, User } from "react-feather";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCoffee, faCode, faCheck } from '@fortawesome/free-solid-svg-icons';
import { size } from "lodash";
import UserIcon from "./UserIcon";
import OnlineIndicator from "./OnlineIndicator";
import { getStatusIcon } from "./utils";
function Card(props) {
  return (
    <div className="card">
      <div>
        <p className="card_id">{props.ticket.id}</p>
        <p className="card_title"> {getStatusIcon(props.ticket.status)}<span className="icon-title-space">&nbsp;</span>{props.ticket.title}</p>

      </div>
      {!props.isUserBoard && (
        <div className="profile_image">
          <UserIcon name={props.name} available={props.userAvailability[props.name]} />
        </div>
      )}
      <div className="icon-tag-container">

        <div className="tag" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="dot"></div>
          <span style={{ fontSize: '8px' }}>{props.ticket.tag}</span>
        </div>

      </div>

    </div>
  );
}

export default Card;
