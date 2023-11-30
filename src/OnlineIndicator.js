
import React from 'react';


function OnlineIndicator(props) {
    const indicatorColor = props.available ? 'green' : 'gray';

    return <div className="online-indicator" style={{ backgroundColor: indicatorColor }}></div>;
}

export default OnlineIndicator;
