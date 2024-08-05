import React, { lazy } from 'react';
import Layout from './Layout';
import Loadable from './Loadable';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Dashboard = Loadable(lazy(() => import('../Dashboard')));
const AIChat = Loadable(lazy(() => import('../AIChat')));
const Single = Loadable(lazy(() => import('../Single')));
const Multiple = Loadable(lazy(() => import('../Multiple')));
const ShareBot = Loadable(lazy(() => import('../Sharebot')));
const ShareBotChat = Loadable(lazy(() => import('../Sharebot/ShareBotChat')));

const Home = Loadable(lazy(() => import('../Home/Home')));
const Pricing = Loadable(lazy(() => import('../Pricing/PricingPage.js')));



const Router = [
  {
    path: '', element: <Home />, exact: true,
  },
  {
    path: '/pricing', element: <Pricing />, exact: true,
  },
  {
    path: '/',
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/chat/:conversation_id?', exact: true, element: <AIChat /> },
      { path: '/single', exact: true, element: <Single /> },
      { path: '/multiple/:document_id?/:conversation_id?', exact: true, element: <Multiple /> },
      { path: '/sharebot', exact: true, element: <ShareBot /> },
      { path: '', element: <Navigate to="/dashboard" /> },
    ],
  },
  { path: '/share/chat/:id', exact: true, element: <ShareBotChat /> },


  { path: '*', element: <Navigate to="/dashboard" /> },


];

export default Router;
