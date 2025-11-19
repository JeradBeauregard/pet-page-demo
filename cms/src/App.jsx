import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import UsersPage from "./pages/users/UsersPage";
import PetsPage from "./pages/pets/PetsPage";
import ItemsPage from "./pages/items/ItemsPage";
import ShopsPage from "./pages/shops/ShopsPage";

function App() {
return(
  <Routes>
    {/* wrap all admin pages in layout */}
    <Route path="/" element={<Layout />}>
      <Route index element={<DashboardPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="pets" element={<PetsPage />} />
      <Route path="items" element={<ItemsPage />} />
      <Route path="shops" element={<ShopsPage />} />

      {/* redirect for unknown paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
)
}

export default App
