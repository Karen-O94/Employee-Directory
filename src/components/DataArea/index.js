import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
import SearchBar from "../SearchBar"
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


    //Function to handle the sorting of items
    const sortingItems = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order: "ascend"
            })
        } else {
            setDeveloperState({
                order: "descend"
            });
        };


        //This function looks at the headings and compares whether they are in ascending/descending order
        const compareFunc = (a, b) => {
            if (developerState.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
        const sortedUsers = developerState.filteredUsers.sort(compareFunc);

        setDeveloperState({
            ...developerState,
            filteredUsers: sortedUsers
        });

    };

    //This function handles any changes in the search bar
    const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setDeveloperState({
            ...developerState,
            filteredUsers: filteredList
        });
    };

    useEffect(() => {
        API.getUsers().then(results => {
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }, []);

    return (
        <DataAreaContext.Provider
            value={{ developerState, handleSearchChange, sortingItems }}
        >
            <SearchBar />
            <div className="data-area">
                {developerState.filteredUsers.length > 0
                    ? <DataTable />
                    : <div></div>
                }
            </div>
        </DataAreaContext.Provider>
    );
}

export default DataArea;