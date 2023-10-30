import {Route,Link,Routes} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Cart from "./Cart";

function App() {
    return (
        <div>
            <center>
                <Link to="/page1">Page1</Link>
                <br></br>
                <Link to="/page2">Page2</Link>
                <br></br>
                <Link to="/page3">Page3</Link>
                <br></br>
                <Link to="/cart">Cart</Link>
                <div>
                    <Routes>
                        <Route path="/page1" element={<Page1 />}></Route>
                        <Route path="/page2" element={<Page2 />}></Route>
                        <Route path="/page3" element={<Page3 />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </div>
            </center>
        </div>
    )
}

export default App;