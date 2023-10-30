import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Cart() {
    const [data,setData] = useState([]);
    const storeState  = useSelector(data => data.number1)
    useEffect(()=> {
        setData(storeState)
    },[])
    return (
        <div>
            <h1>Cart Page</h1>
            {
                data.map(obj =>
                    <div className="page1_main">
                        <p>product name : {obj.product}</p>
                        <p>product price : {obj.price}</p>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart;