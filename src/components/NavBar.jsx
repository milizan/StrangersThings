import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ token }){
    // Show different links if logged in or not
    // Implement logout functionality
  
    function handleClick(e) {
        localStorage.removeItem ("token")
    }

  return (  
    <nav className="nav">         
                <Link to="/posts" className="site-title">Posts</Link>
        <ul>          
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            {localStorage.getItem("token")?<button onClick={handleClick}>Logout</button>:(<><li><Link to="/login">Login</Link></li> <li><Link to="/register">Register</Link></li></>)
            
            }
            <li>
                <Link to="/Createpost">Add Post</Link>
            </li>
            
        </ul>
    </nav>
  )  
}