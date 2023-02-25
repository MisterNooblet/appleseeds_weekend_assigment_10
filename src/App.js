import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Admin, Brand, Catalog, Error404, Header, Home, Item, Login, Register } from './pages';
import { useState } from 'react';




function App() {
  const [user, setUser] = useState(true)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header user={user} setUser={setUser} />,
      errorElement: <Error404 />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/catalog', element: <Catalog /> },
        { path: '/admin', element: <Admin /> },
        { path: '/login', element: <Login setUser={setUser} /> },
        { path: '/register', element: <Register setUser={setUser} /> },
        { path: '/catalog/:brandName', element: <Brand /> },
        { path: '/catalog/:brandName/p/:id', element: <Item user={user} /> },
      ]

    },

  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
