import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import AccountView from 'src/components/customer/account';
import CustomerListView from 'src/components/customer';
// import DashboardView from 'src/components/reports/DashboardView';
import LoginView from 'src/components/auth/LoginView';
// import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/components/product';
import PurchaseView from 'src/components/purchase';
import PurchasesView from 'src/components/purchase/account';
import CategoryListView from 'src/components/category';
import ProvidersListView from 'src/components/provider';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'customer/:_id', element: <AccountView /> },
      { path: 'customer', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      // { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'purchase', element: <PurchasesView /> },
      { path: 'categories', element: <CategoryListView /> },
      { path: 'providers', element: <ProvidersListView /> },
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
