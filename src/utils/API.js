import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API = {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=100");
    }

};

export default API; 