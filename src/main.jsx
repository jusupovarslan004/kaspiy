import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Router} from "./app/router/Router.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router}/>
)
