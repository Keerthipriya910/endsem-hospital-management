import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uname = localStorage.getItem("username");
    if (!token) navigate("/");
    else setUsername(uname);
  }, []);

  return (
    <div className="dashboard-grid">
      <header className="header">Welcome to Hospital Management System</header>
      <aside className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li>Patient Records</li>
          <li>Doctor Schedule</li>
          <li>Appointments</li>
          <li>Billing</li>
          <li>Inventory</li>
        </ul>
      </aside>
      <main className="content">
        <h2>Hello, {username}</h2>
        <p>This is your hospital dashboard overview.</p>
        <div className="cards">
          <div className="card">👩‍⚕️ 25 Doctors</div>
          <div className="card">🧑‍🤝‍🧑 120 Patients</div>
          <div className="card">📅 45 Appointments</div>
          <div className="card">💰 Revenue: ₹2.4L</div>
        </div>
      </main>
    </div>
  );
}
