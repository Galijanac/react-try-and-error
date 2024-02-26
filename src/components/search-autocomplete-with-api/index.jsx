import { useEffect, useState } from "react"
import Suggestions from "./suggesstions";



export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function fetchListOfUser() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(userItem => userItem.firstName));
                setLoading(false);
                setErrorMessage(null);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setErrorMessage(error);
        }
    }

    function handleClick(event) {
        console.log(event.target.innerText);
        setShowDropdown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length ? users.filter(item => item.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        }
        else {
            setShowDropdown(false)
        }
    }

    useEffect(() => {
        fetchListOfUser()
    }, []);

    console.log(users, filteredUsers);
    return <div className="search-autocomplete-container">
        {
            loading > <h1> Loading data ! Please wait</h1>
        }
        <input value={searchParam} name="search-users" placeholder="Search Users here..." onChange={handleChange} />
        {

            showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />
        }
    </div>
}