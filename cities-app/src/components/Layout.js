// src/components/Layout.js
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header style={{ background: "#4A90E2", padding: "1rem", color: "#fff" }}>
        <h1>Cities Application</h1>
        <nav>
          <Link style={{ color: "#fff", marginRight: "1rem" }} to="/cities">
            Cities List
          </Link>
          <Link style={{ color: "#fff" }} to="/add">
            Add City
          </Link>
        </nav>
      </header>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: "center", padding: "1rem", background: "#f1f1f1" }}>
        <p>&copy; 2025 Cities App</p>
      </footer>
    </div>
  );
}

export default Layout;
