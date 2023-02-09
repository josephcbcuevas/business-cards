import SocialDark from "./SocialDark.js";

export default function HeaderDark(){
    return(
        <div className="head" id="head-dark">
            <img src="./business-cards/joeheadshot.jpg" alt="Joe Cuevas" className="headshot" />
            <h1>Josephcarlos Cuevas</h1>
            <SocialDark />
        </div>
    );
}