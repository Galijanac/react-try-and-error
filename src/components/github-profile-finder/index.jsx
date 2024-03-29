import { useEffect, useState } from "react"
import User from "./user";
import "./styles.css"


export default function GithubProfileFInder() {

    const [userName, setUserName] = useState("Galijanac");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleSubmit(){
        fetchGithubUserData();
    }

    async function fetchGithubUserData(){
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if (data){
            setUserData(data);
            setLoading(false);
            setUserName("");
            console.log(data);
        }
    }

    useEffect(() => {
        fetchGithubUserData();
    },[])

    if(loading){
        return <h1> Loading Data! Please Wait</h1>;
    }

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input name="search-by-username"
                type="text"
                placeholder="Search Github Usernme..."
                value={userName}
                onChange={(event) => setUserName(event.target.value)} />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData}/> : null
        }
    </div>
}