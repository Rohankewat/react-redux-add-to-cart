import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { mangaState } from "./Redux/Reducers";
import { useSelector,useDispatch } from "react-redux";
import { manageCart } from "./Redux/Reducers";

function Extra1() {
    const dispatch = useDispatch();
    const storeState = useDispatch(data => data)
    const [name,setName] = useState();
    const [sal,setSal] = useState();
    const [data,setData] = useState();

    const dispatch = useDispatch();
    const storeState = useSelector(data => data);

    var f1 = (evt) => {
        if(evt.target.name === "box1") {
            setName(evt.target.value);
        }
        else if(evt.target.name === "box2") {
            setSal(evt.target.value);
        }
    }
    var f2 = (evt) => {
        evt.preventDefault();
        var obj = {
            name:name,
            sal:sal
        }
        setData(obj)
    }

    console.log(storeState)
    return (
        <div>
            <center>
                <h1>App Component</h1>

                <form onSubmit={f2}>
                    <input placeholder="enter your name" name="box1" onChange={f1}></input>
                    <input placeholder="enter your sal" name="box2" onChange={f1}></input>
                    <button>save</button>
                </form>
                <button onClick={()=> dispatch(mangaState(data))}>show store data</button>
                <h1 >{storeState.number1.name}</h1>
                <h1>{storeState.number1.sal}</h1>
                <h1 ></h1>
                <h1 ></h1>
            </center>
        </div>
    )
}

export default Extra1;