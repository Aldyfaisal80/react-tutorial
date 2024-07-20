// src/routes.ts
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  type RouteObject,
} from 'react-router-dom';
import DashboardMainLayout from './components/layouts/dashboard/DashboardMainLayout';
import Dashboard from './pages/Dashboard';
import DashboardNotifactions from './pages/DashboardNotifactions';
import DashboardProfile from './pages/DashboardProfile';
import DashboardTables from './pages/DashboardTables';
import CustomerPage from './pages/sub-pages/Tables/CustomerPage';
import ProductPage from './pages/sub-pages/Tables/ProductPage';

const routes: RouteObject[] = createRoutesFromElements(
  <Route path="dashboard" element={<DashboardMainLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="profile" element={<DashboardProfile />} />
    <Route path="tables" element={<DashboardTables />}>
      <Route index element={<Navigate to="products" />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="customers" element={<CustomerPage />} />
    </Route>
    <Route path="notifactions" element={<DashboardNotifactions />} />
  </Route>
);

export const router = createBrowserRouter(routes);
