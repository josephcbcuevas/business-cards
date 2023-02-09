import SocialLight from "./SocialLight.js";

export default function HeaderDark(){
    return(
        <div className="head" id="head-light">
            <img src="./business-cards/joeheadshot.jpg" alt="Joe Cuevas" className="headshot" />
            <h1>Josephcarlos Cuevas</h1>
            <SocialLight />
        </div>
    );
}