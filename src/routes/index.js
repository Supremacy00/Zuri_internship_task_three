import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Homepage from "../components/homepage/Homepage";

const router = createBrowserRouter([
    {path: "/", element: Navbar(),},
    {path: "/hompage", element: Homepage(),}
])



export {router};