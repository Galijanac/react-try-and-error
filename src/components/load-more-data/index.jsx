import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const resault = await response.json();

            if (resault && resault.products && resault.products.length ) {
                setProducts((prevData) => [...prevData, ...resault.products]);
                setLoading(false);
            }
            
            console.log(resault);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100)
            setDisableButton(true);
    }, [products]);

    if (loading) {
        return <div>Loading data ! please wait.</div>
    }

    return <div className="load-more-container">
        <div className="product-container" >
            {
                products && products.length ?
                    products.map((item) =>
                        <div key={item.id} className="product">
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ) : null
            }
        </div>
        <div className="buton-container" >
            <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load more products</button>
            {
                disableButton ? <p>You have reached to 100 products</p> : null
            }
        </div>
    </div>
}