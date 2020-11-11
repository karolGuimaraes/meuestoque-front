import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
// import AccountView from 'src/components/account';
import CustomerListView from 'src/components/customer';
import DashboardView from 'src/components/reports/DashboardView';
import LoginView from 'src/components/auth/LoginView';
// import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/components/product';
import PurchaseView from 'src/components/purchase';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      // { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'purchases', element: <PurchaseView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      // { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/products" /> },
      { path: '*', element: <Navigate to="/404" /> },
      
    ]
  }
];

export default routes;
