import { useEffect, useState } from "react"
import { BsFillSignNoRightTurnFill } from "react-icons/bs";
import "./styles.css"




export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercengage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products && data.products.length) {
                setData(data.products);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    function handleScrollPercenttage() {
        console.log(document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight);

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercengage(howMuchScrolled / height * 100);
    }

    console.log(scrollPercentage);

    useEffect(() => {
        fetchData(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercenttage);
        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, []);

    return <div>
        <div className="top-container">
            <h1>Custom scroll Indicator</h1>
            <div className="scroll-progress-tracking-cotainer">
                <div className="current-progress-bar" style={{ width: `${scrollPercentage}%`}}></div>
            </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <p>{dataItem.title}</p>)
                        : null
                }
            </div>

    </div>
}