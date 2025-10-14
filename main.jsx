import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


//pages
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import Product from './Pages/Product';

// redux import 
import {Provider} from "react-redux"
import store from './Redux/Store';
import TodoApp from './components/TodoApp';


// router setup
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [

      {path : "/home", element : < Home />},
      {path: "/About", element: < About/>},
      {path: "/Contact", element : < Contact />},
      {path : "/Cart", element : < Cart />},
      {path: "/Products", element: < Products/> },
      {path : "Product-detail/:id", element: < Product />},
       {path : "todo", element : <TodoApp/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
    <RouterProvider router={router} >
    </RouterProvider>
     </Provider>
  </StrictMode>
)
