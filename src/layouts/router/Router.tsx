import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../Layout/Layout'));
function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Layout /> },
    { path: '/signup', element: <Layout /> },
  ]);
  return routes;
}
const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
