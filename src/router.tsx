// src/routes.ts
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  type RouteObject,
} from 'react-router-dom';
import DashboardMainLayout from './components/layouts/dashboard/DashboardMainLayout';
import Dashboard from './pages/dashbaord/Dashboard';
import DashboardNotifactions from './pages/dashbaord/DashboardNotifactions';
import DashboardProfile from './pages/dashbaord/DashboardProfile';
import DashboardTables from './pages/dashbaord/DashboardTables';
import CustomerPage from './pages/dashbaord/sub-pages/tables/CustomerPage';
import ProductPage from './pages/dashbaord/sub-pages/tables/ProductPage';
import ProductDetail from "./pages/dashbaord/sub-pages/tables/detail/ProductDetail"
import CustomerDetail from "./pages/dashbaord/sub-pages/tables/detail/CustomerDetail"
import Home from './pages/Home';
import ErrorPage from './404';

const routes: RouteObject[] = createRoutesFromElements(
  <Route path='/' errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="dashboard" element={<DashboardMainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="profile" element={<DashboardProfile />} />
      <Route path="tables" element={<DashboardTables />}>
        <Route index element={<Navigate to="products" />} />
        <Route path="products" element={<ProductPage />} />
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path="customers" element={<CustomerPage />} />
        <Route path='customers/:id' element={<CustomerDetail />} />
      </Route>
      <Route path="notifactions" element={<DashboardNotifactions />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(routes);
