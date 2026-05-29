import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Stores from './Pages/Stores/Stores';
import Store from './Pages/Store/Store';
import Cart from './Pages/Cart/Cart';

const Router = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/store', element: <Stores /> },
    { path: '/store/:storeId', element: <Store /> },
    { path: '/cart', element: <Cart /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
