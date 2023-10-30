import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { manageCart } from "./Redux/Reducers";

function Page3() {
    const [arr3,setArr3] = useState();
    const dispatch = useDispatch();
    const storeState = useSelector(data => data.number1)
    const arr = [
        {"id":11,"product":"macbook pro x","price":300000},
        {"id":12,"product":"earphone 14xt","price":3000},
        {"id":13,"product":"vivo 45 iox","price":10000},
        {"id":14,"product":"zebronics TV","price":23000},
        {"id":15,"product":"blackbeer next2","price":58000}
    ]
    console.log(storeState);
    return (
        <div>
            <h1>Page3</h1>
            {
                arr.map(obj =>
                    <div className="page1_main">
                        <p>Product name : {obj.product}</p>
                        <p>Product price : {obj.price}</p>
                        <button onClick={()=> setArr3([...storeState,{...obj}])}>Add to cart</button>
                        <button onClick={()=> dispatch(manageCart(arr3))}>store state</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Page3;