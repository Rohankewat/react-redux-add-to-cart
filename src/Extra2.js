import { useSelector } from "react-redux";

function Extra2() {
    const storeState = useSelector(data => data);

    var f5 = () => {
        document.getElementById("first").innerHTML = storeState.number1.name;
        document.getElementById("second").innerHTML = storeState.number1.sal;
    }
    return (
        <div>
            <button onClick={f5}>show data</button>
            <h1 id="first"></h1>
            <h1 id="second"></h1>
        </div>
    )
}

export default Extra2;