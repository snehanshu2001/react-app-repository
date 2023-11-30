
import React, { useEffect } from "react";
import Constants from "./Constants";
import { useState } from "react";
import ApiService from "./ApiService";
import UserBoard from "./Board/UserBoard";
import PriorityBoard from "./Board/PriorityBoard";
import ProgressBoard from "./Board/ProgressBoard";
export default function BoardContainer(props) {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [progressList, setProgressList] = useState([]);

  function filterProgressCards(progress) {
    return tickets.filter((ticket) => {
      return ticket.status.toLowerCase() === progress.toLowerCase();
    });
  }

  function filterUserTickets(id) {
    return tickets.filter((ticket) => {
      return ticket.userId === id;
    });
  }

  function filterPriorityTickets(priority) {
    return tickets.filter((ticket) => {
      return ticket.priority == priority;
    });
  }

  async function fetchInitialData() {
    const apiData = await ApiService.fetchData();
    setUsers(apiData.users);
    setTickets(apiData.tickets);
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  if (props.selectedOrdering === 'Title') {
    tickets.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  else {
    tickets.sort((a, b) => b.priority - a.priority);
  }

  const username = {};
  const userAvailability = {};
  users.forEach(user => {
    username[user.id] = user.name;
    userAvailability[user.name] = user.available;

  });
  console.log(userAvailability);


  return (
    <div className="app_boards_container">
      <div className="app_boards">
        {(() => {
          if (props.selectedGrouping === "User")
            return users.map((user) => (
              <UserBoard
                key={user.id}
                user={user}
                ordering={props.selectedOrdering}
                cards={filterUserTickets(user.id)}
                username={username}
                userAvailability={userAvailability}
              />
            ));
          if (props.selectedGrouping === "Priority")
            return Array.from(Object.keys(Constants.priorityOptions)).map(
              (priority) => (
                <PriorityBoard
                  key={priority}
                  priority={priority}
                  ordering={props.selectedOrdering}
                  cards={filterPriorityTickets(priority)}
                  username={username}
                  userAvailability={userAvailability}
                />
              )
            );
          if (props.selectedGrouping === "Progress")
            return Constants.progressOptions.map((progress) => (
              <ProgressBoard
                key={progress}
                progress={progress}
                ordering={props.selectedOrdering}
                cards={filterProgressCards(progress)}
                username={username}
                userAvailability={userAvailability}
              />
            ));
          else return <></>;
        })()}
      </div>
    </div>
  );
}
