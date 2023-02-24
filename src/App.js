import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Admin, Catalog, Error404, Header, Home, Item, Login } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Error404 />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/admin', element: <Admin /> },
      { path: '/login', element: <Login /> },
      { path: '/catalog/:id', element: <Item /> },
    ]

  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
