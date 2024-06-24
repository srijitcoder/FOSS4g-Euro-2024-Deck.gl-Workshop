import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App, { components } from './app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  ...components.map(component => {
    return {
      path: component.path,
      element: component.element,
    };
  }),
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
