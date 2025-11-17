import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav className="navbar">
      <h1>🏥 KLU Hospital</h1>
      <ul>
        {!isLoggedIn && (
          <>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={() => { localStorage.clear(); window.location.href = "/"; }}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}
