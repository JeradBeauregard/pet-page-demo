// src/components/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";

const linkBaseStyle = {
  display: "block",
  padding: "0.75rem 1rem",
  marginBottom: "0.25rem",
  borderRadius: "0.5rem",
  textDecoration: "none",
  fontSize: "0.95rem",
};

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#020617",
        color: "#e5e7eb",
        padding: "1rem",
        borderRight: "1px solid #1f2937",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
        Solterra CMS
      </h1>

      <nav>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? "#1d4ed8" : "transparent",
            color: isActive ? "#f9fafb" : "#9ca3af",
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? "#1d4ed8" : "transparent",
            color: isActive ? "#f9fafb" : "#9ca3af",
          })}
        >
          Users
        </NavLink>

        <NavLink
          to="/pets"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? "#1d4ed8" : "transparent",
            color: isActive ? "#f9fafb" : "#9ca3af",
          })}
        >
          Pets
        </NavLink>

        <NavLink
          to="/items"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? "#1d4ed8" : "transparent",
            color: isActive ? "#f9fafb" : "#9ca3af",
          })}
        >
          Items
        </NavLink>

        <NavLink
          to="/shops"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? "#1d4ed8" : "transparent",
            color: isActive ? "#f9fafb" : "#9ca3af",
          })}
        >
          Shops
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
