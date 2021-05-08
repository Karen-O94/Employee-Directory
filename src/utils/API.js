import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API

const API = {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=100&nat=gb");
    }

};

export default API; 