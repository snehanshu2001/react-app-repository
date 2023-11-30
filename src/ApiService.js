import Constants from "./Constants";

export default class ApiService {
    static fetchData = async() => {
        const response = await fetch(Constants.INIT_DATA_URL);
        const jsonResponse = response.json();
        return jsonResponse;
    }

    static fetchUsersFromData = async(apiData) => {
        let usersList = Array.from(apiData.users);
        let result = {};
        for(var i = 0; i<usersList.length; i++) {
            result[usersList[i].id] = usersList[i];
        }
        return result;
    }
}