import "./Page1.css";
import { useSelector,useDispatch } from "react-redux";
import { manageCart } from "./Redux/Reducers";
import { useState } from "react";

function Page1() {
    const [arr1,setArr1] = useState([]);
    const dispatch = useDispatch();
    const storeState  = useSelector(data => data.number1);
    const arr = [
        {"id":1,"product":"watch","price":25000},
        {"id":2,"product":"vivo v17","price":28000},
        {"id":3,"product":"lenovo laptop","price":30000},
        {"id":4,"product":"apple tablet","price":100000},
        {"id":5,"product":"sony xperia","price":55000}
    ]
    
    console.log(storeState)
    
    return (
        <div>
            <h1>Page1</h1>
            {
                arr.map(obj => 
                    <div className="page1_main">
                        <p>Product name : {obj.product}</p>
                        <p>Product price : {obj.price}</p>
                        <button onClick={()=> setArr1([...storeState,{...obj}])}>add to cart</button>
                        <button onClick={()=> dispatch(manageCart(arr1))}>store data</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Page1;