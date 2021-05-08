import React, { useContext } from "react";
import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => context.handleSearchChange(e)}
                />
            </form>
        </div>
    );
}
export default SearchName;