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
        <Route path="products" element={<ProductPage />} >
          <Route path=':id' element={<h1>Hello World Detail Product</h1>} />
        </Route>
        <Route path="customers" element={<CustomerPage />} >
          <Route path=':id' element={<h1>Hello World Detail Customer</h1>} />
        </Route>
      </Route>
      <Route path="notifactions" element={<DashboardNotifactions />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(routes);
