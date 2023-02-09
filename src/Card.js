import HeaderDark from "./HeaderDark.js";
import HeaderLight from "./HeaderLight.js";
import Main from "./Main.js";

export default function Card(){
    return(
        <div className="container">
            <div id="dark">
                <div className="card" id="card-dark">
                    <HeaderDark />
                    <Main />
                </div>
            </div>
            <div id="light">
                <div className="card" id="card-light">
                    <HeaderLight />
                    <Main />
                </div>
            </div>
        </div>
    );
}