import React from 'react';
import { getShortName, getColor } from './utils';
import OnlineIndicator from './OnlineIndicator'; // Assuming you have an OnlineIndicator component

function UserIcon(props) {
    const backgroundColor = getColor(props.name);

    return (
        <div className="user-icon-container">
            <div style={{ backgroundColor }} className="icon">
                <span>{getShortName(props.name)}</span>
            </div>
            <OnlineIndicator available={props.available} />
        </div>
    );
};

export default UserIcon;
