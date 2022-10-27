import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Courses from "../Pages/Courses/Courses";
import Coursesdetails from "../Pages/Coursesdetails/Coursesdetails";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/Notfound/Notfound";
import Privetroute from "../Pages/Privetroute/Privetroute";
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
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader:()=>fetch('https://information-tecnology-server.vercel.app/courses')
            },
            {
                path: '/coursesdetails/:id',
                element:<Coursesdetails></Coursesdetails>,
                loader: (({params})=> {
                    const { id } = params
                    return fetch(`https://information-tecnology-server.vercel.app/coursesdetails/${id}`)
                })
            },
            {
                path: '/courses/coursesdetails/checkout/:index',
                element: <Privetroute><Checkout></Checkout></Privetroute>,
                loader: (({ params}) => {
                    const {index}=params
                    return fetch(`https://information-tecnology-server.vercel.app/courses/coursesdetails/checkout/${index}`)
                })
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ])
    },
    {
        path: '*',
        element:<Notfound></Notfound>
    }
])
export default router