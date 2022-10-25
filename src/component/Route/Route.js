import { createBrowserRouter } from "react-router-dom";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/Notfound/Notfound";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:([
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader:()=>fetch('http://localhost:5000/data')
            }
        ])
    },
    {
        path: '*',
        element:<Notfound></Notfound>
    }
])
export default router