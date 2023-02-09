import Pdf from './Resume2023.pdf';

export default function SocialLight(){
    return(
        <div className="social">
            <div className="linkedin-container"><a href="https://www.linkedin.com/in/josephcarlos-cuevas-525176127/" target="_blank"><img className="social-icon" src={require('./linkedin-light.svg').default} alt="LinkedIn"/></a></div>
            <div className="github-container"><a href="https://github.com/josephcbcuevas" target="_blank"><img className="social-icon" src={require('./github-light.svg').default} alt="GitHub"/></a></div>
            <div className="email-container"><a href="mailto:josephcbcuevas@gmail.com" target="_blank"><img className="social-icon" src={require('./email-light.svg').default} alt="Email"/></a></div>
            <div className="email-container"><a href={Pdf} target="_blank"><img className="social-icon" src={require('./resume-light.svg').default} alt="Email"/></a></div>
        </div>
    );
}