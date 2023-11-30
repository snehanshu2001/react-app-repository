import React from 'react';
import { getShortName, getColor } from "./utils"
const UserIcon = ({ name }) => {


    const backgroundColor = getColor(name);
    return (
        <div style={{ backgroundColor }} className="icon">
            <span>{getShortName(name)}</span>
        </div>
    );
};

export default UserIcon;