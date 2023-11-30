import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faSpinner,
    faTimesCircle,
    faTasks, faListAlt,
    faCircle,
    faArrowUp,
    faArrowDown,
    faExclamationTriangle,
    faAdjust
} from "@fortawesome/free-solid-svg-icons";
function getShortName(fullName) {

    const name = fullName.split(" ");


    var shortName = name[0][0];
    if (name[1]) {
        shortName = shortName + name[1][0].toUpperCase();
    }

    return shortName;
}
function getColor(name) {
    const firstLetter = name[0].toLowerCase();
    let color = 'lightblue';


    const asciiCode = firstLetter.charCodeAt(0);


    if (asciiCode >= 97 && asciiCode <= 122) {
        const group = Math.floor((asciiCode - 97) / 3) % 4;

        switch (group) {
            case 0:
                color = 'pink';
                break;
            case 1:
                color = 'blue';
                break;
            case 2:
                color = 'yellow';
                break;
            case 3:
                color = 'orange';
                break;
            default:

                break;
        }
    }

    return color;
}


function getStatusIcon(status) {
    switch (status) {
        case "Done":
            return <FontAwesomeIcon icon={faCheckCircle} />;
        case "In progress":
            return <FontAwesomeIcon icon={faSpinner} spin />;
        case "Backlog":
            return <FontAwesomeIcon icon={faListAlt} />;
        case "Cancelled":
            return <FontAwesomeIcon icon={faTimesCircle} />;
        case "Todo":
            return <FontAwesomeIcon icon={faTasks} />;
        default:
            return null;
    }
}
function getPriorityIcon(priority) {
    switch (priority) {
        case "No Priority":
            return <FontAwesomeIcon icon={faCircle} />;
        case "Low":
            return <FontAwesomeIcon icon={faArrowDown} />;
        case "Medium":
            return <FontAwesomeIcon icon={faAdjust} />;
        case "High":
            return <FontAwesomeIcon icon={faArrowUp} />;
        case "Urgent":
            return <FontAwesomeIcon icon={faExclamationTriangle} />;
        default:
            return null;
    }
}

export { getShortName, getColor, getStatusIcon, getPriorityIcon };