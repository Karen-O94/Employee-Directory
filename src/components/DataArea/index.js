import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import DataAreaContext from "../../utils/DataAreaContext";
import './style.css';

const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
      users: [],
      order: "ascend",
      filteredUsers: [],
      headings: [
        { name: "Image", width: "10%", },
        { name: "Name", width: "10%", },
        { name: "Phone", width: "20%", },
        { name: "Email", width: "20%", },
        { name: "DOB", width: "10%", }
      ]
    });

}