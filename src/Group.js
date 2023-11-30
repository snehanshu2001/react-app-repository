import React from 'react';
import SelectBox from './SelectBox';
import { useCookies } from 'react-cookie';
import "./App.css";
import Constants from './Constants';
function Group({
  setSelectedStatus,
  setSelectedGrouping,
  groupingOptions,
  statusOptions,
  initialGrouping,
  initialStatus,
  displayBoxRef,
}) {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const handleGroupingSelect = (option) => {
    setCookie(Constants.selectedGroupingKey, option);
    setSelectedGrouping(option);
  };

  const handleStatusSelect = (option) => {
    setCookie(Constants.selectedOrderKey, option);
    setSelectedStatus(option);
  };

  return (
    <div className="display-box" id="display-box" ref={displayBoxRef}>
      <SelectBox
        label="Grouping"
        options={groupingOptions}
        value={initialGrouping}
        onChange={handleGroupingSelect}
      />
      <SelectBox
        label="Ordering"
        options={statusOptions}
        value={initialStatus}
        onChange={handleStatusSelect}
      />
    </div>
  );
}

export default Group;
