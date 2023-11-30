import Board from "./Board";
import React, { useEffect } from "react";
import Constants from "./Constants";
import { useState } from "react";
import ApiService from "./ApiService";
import UserBoard from "./UserBoard";
import PriorityBoard from "./PriorityBoard";
import ProgressBoard from "./ProgressBoard";
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
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });

    }
    else {
        tickets.sort((a, b) => a.priority - b.priority);
    }
    function def(givenData, key) {
        const result = {};
        givenData.forEach((currentObject) => {


            if (!result[key]) {
                result[key] = [];
            }

            result[key].push(currentObject);
        });

        return result;
    }

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
                            />
                        ));
                    else return <></>;
                })()}
            </div>
        </div>
    );
}
