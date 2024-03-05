import { useEffect, useState } from "react";



export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);


    async function fetchData() {
        try {
            setPending(true);
            const respose = await fetch(url, { ...options });
            if (!respose.ok) throw new Error(respose.statusText);

            const resault = await respose.json();
            setData(resault);
            setError(null);
            setPending(false);
        }
        catch (error) {
            console.log(error);
            setError(`${error} Some Error Occured`);
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, error, pending };
}