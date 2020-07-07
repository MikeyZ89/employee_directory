import React from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark text-white text-left">
            <div className="navbar-brand">
                <h1>Employee Directory</h1>
                <h6>Use the search by employee input field or the sort button next to the name field to narrow your search</h6>
                </div>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-4"
                    type="search"
                    placeholder="Search by Employee"
                    aria-label="Search"
                    name="search"
                    onChange={props.handleInputChange}
                    value={props.search}
                />
            </form>
        </nav>
    );
}