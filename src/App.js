import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Navbar from "./Navbar";
import { useState } from "react";
import "./App.css";
import BoardContainer from "./BoardContainer";
import Constants from "./Constants";
function App() {
  const [selectedGrouping, setSelectedGrouping] = useState(Constants.groupingOptions[0]);
  const [selectedOrdering, setSelectedOrdering] = useState(Constants.orderingOptions[0]);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  useEffect(() => {
    // fetchInitialData();
    console.log(cookies[Constants.selectedGroupingKey]);
    console.log(cookies[Constants.selectedOrderKey]);
    if (cookies[Constants.selectedGroupingKey]) {
      setSelectedGrouping(cookies[Constants.selectedGroupingKey]);
    }
    if (cookies[Constants.selectedOrderKey]) {
      setSelectedOrdering(cookies[Constants.selectedOrderKey]);
    }
  }, []);

  return (
    <div className="app">
      <Navbar
        setSelectedStatus={setSelectedOrdering}
        setSelectedGrouping={setSelectedGrouping}
        selectedGrouping={selectedGrouping}
        selectedStatus={selectedOrdering}
        groupingOptions={Constants.groupingOptions}
        statusOptions={Constants.orderingOptions}
      />

      <BoardContainer selectedGrouping={selectedGrouping} selectedOrdering={selectedOrdering} />
    </div>
  );
}

export default App;
