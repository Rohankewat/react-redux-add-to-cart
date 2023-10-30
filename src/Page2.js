import { useSelector,useDispatch } from "react-redux";
import { manageCart } from "./Redux/Reducers";
import { useEffect, useState } from "react";

function Page2() {
    const [arr2,setArr2] = useState();
    const dispatch = useDispatch();
    const storeState = useSelector(data => data.number1)


    console.log(storeState);
    const arr = [
        {"id":6,"product":"earbus pro","price":3000},
        {"id":7,"product":"earpods 14next","price":300},
        {"id":8,"product":"iphone x","price":145000},
        {"id":9,"product":"micromax 12","price":2300},
        {"id":10,"product":"sony v22","price":55000}
    ]
    return (
        <div>
            <h1>Page2</h1>
            {
                arr.map(obj =>
                    <div className="page1_main">
                        <p>Product name : {obj.product}</p>
                        <p>Product price : {obj.price}</p>
                        <button onClick={() => setArr2([...storeState,{...obj}])}>Add to cart</button>
                        <button onClick={()=> dispatch(manageCart(arr2))}>sotre state</button>
                    </div>
                    )
            }
        </div>
    )
}

export default Page2;