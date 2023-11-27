import {Link, NavLink} from "react-router-dom"
import './navbar.css';
import "@fontsource/fahkwang"; // Defaults to weight 400
import "@fontsource/fahkwang/400.css"; // Specify weight
import "@fontsource/fahkwang/400-italic.css"; // Specify weight and style

const Navbar = () => {
    return (
        <div>
         <nav>
          <ul>
            <li>
                <div className="name">Anurag Agarwal <span style={{fontSize:'20px',fontWeight:'normal'}}>/&nbsp; Software Developer </span> </div>
            </li>
            <li>
              <Link className='text-link' to="/portfolio/aboutme">About Me</Link>
            </li>
            <li>
              <Link className='text-link' to="/portfolio/resume">Resume</Link>
            </li>
            <li>
              <Link className='text-link' to="/portfolio/project">Projects</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
    }
    
    export default Navbar