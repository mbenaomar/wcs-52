import MainLayout from 'Frontend/views/MainLayout.js';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import StripDefinitionView from "Frontend/views/strip-definition/StripDefinitionView";
import HomeView from "Frontend/views/home/HomeView";

export const routes = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <HomeView/>, handle: { title: 'Home Page' } },
      { path: '/strip-definition', element: <StripDefinitionView />, handle: { title: 'Strip Definition' } },
    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes);
