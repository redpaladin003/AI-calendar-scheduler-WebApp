import './Hero.css';
import { CiLogin } from "react-icons/ci";

function handlingSigningPage():any {
    return (
        <div>
            "this is working"
        </div>
    )
}

const Headline : React.FC = () => {
    const header1 = "Boost your productivity."
    const header2 = "Start using our app right now!"
    return (
        <div className="Hero-Headline">
            <h1>{header1}<br></br>{header2}</h1>
            <h2 id="Hero-subtext">Effortlessly manage your schedule with the power of AI.<br></br> 
                Organize, plan, and stay ahead with a tool designed to simplify your life.
            </h2>
            <div id="button-container">
                <button className="button button-primary" onClick={handlingSigningPage}>Get started</button>
                <button className="button button-secondary">Login<CiLogin size={25}/></button>
            </div>
            
        </div>
    )
}

export default Headline;