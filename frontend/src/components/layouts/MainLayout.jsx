import { Link } from "react-router-dom";
import './MainLayout.css'


const MainLayout = ({ children }) => {
    return (
        <>
            <ul>
                <li>
                    <Link to ="/">Home</Link> 
                </li>
                <hr />
                <li>
                    <Link to ="/course">Cours</Link> 
                </li>
                <hr />
                <li>
                    <Link to ="/coursesindex">Liste des Cours</Link> 
                </li>
                <hr />
                <li>
                    <Link to ="/stateexample">Compteur</Link> 
                </li>
                <hr />
                <li>
                    <Link to ="/form">Form</Link> 
                </li>
            </ul>

            {children}

            <div className="footer">
                <p>Footer</p>
            </div>
        </>
    );
};

export default MainLayout;