import { useSelector } from "react-redux";

function Extra3() {
    const storeState = useSelector(data => data)

    var f3 = () => {
        document.getElementById("one").innerHTML = storeState.number1.name;
        document.getElementById("two").innerHTML = storeState.number1.sal;
    }
    return (
        <div>
            <button onClick={f3}>show data</button>
            <h1 id="one"></h1>
            <h1 id="two"></h1>
        </div>
    )
}

export default Extra3;