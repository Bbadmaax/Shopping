import { StrictMode, lazy , Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from "./App.jsx"



// lazy load 
const Home = lazy(()=> import('./Pages/Home'));
const About = lazy(()=> import("./Pages/About"));
const Contact = lazy(()=> import("./Pages/Contact"));
const Cart = lazy(()=> import('./Pages/Cart'));
const Products = lazy(()=> import('./Pages/Products')); 
const Product = lazy(()=> import('./Pages/Product'))

// redux import 
import {Provider} from "react-redux"
import store from './Redux/Store';
import TodoApp from './components/TodoApp';
import PrivateRoute from './components/PrivateRoute';

//login form authentication
import Login from './pages-login/Login';
import Register from './pages-login/Register';



// router setup
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
        { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
  
      {path : "/home", element : <PrivateRoute>< Home /></PrivateRoute>  },
      {path: "/About", element: <PrivateRoute>< About/> </PrivateRoute> },
      {path: "/Contact", element : <PrivateRoute>< Contact /></PrivateRoute>  },
       {path: "/Products", element: <PrivateRoute> < Products/></PrivateRoute> },
      {path : "/Cart", element : <PrivateRoute>< Cart /></PrivateRoute> },
      {path : "Product-detail/:id", element: < Product />},
       {path : "todo", element : <TodoApp/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
   <Suspense fallback={<div className='font-bold text-2xl'>Loading...</div>}>
  <RouterProvider router={router} />
</Suspense>
     </Provider>
  </StrictMode>
)

