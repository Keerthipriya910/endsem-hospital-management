import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/auth/signup", form);
      alert(res.data);
      navigate("/");
    } catch (err) {
      alert("Registration failed — username or email already exists.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" required
            onChange={(e) => setForm({ ...form, username: e.target.value })} />
          <input type="email" placeholder="Email" required
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" placeholder="Password" required
            onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}
