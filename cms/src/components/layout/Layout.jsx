// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <main
        style={{
          flex: 1,
          padding: "1.5rem",
          backgroundColor: "#2e2e2eff",
          color: "#e5e7eb",
        }}
      >
        {/* This is where route-specific content gets rendered */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
