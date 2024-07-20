import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Loading from "./components/Loading.jsx";
import UserContext from "./utils/UserContext.jsx";


// lazy loading
// on demand loading
const Contact = lazy(() => import("./components/Contact.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Grocery = lazy(() => import("./components/Grocery.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.jsx"));



const AppLayout = () => {

    const [userName, setUserName] = useState();

    // authentication code
    useEffect(() => {
        // make an API call to send username and password
        const data = {
            name: "Bharat Dhiman"
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Loading />}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Loading />}><Contact /></Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Loading />}><Grocery /></Suspense>,
            },
            {
                path: "/cart",
                element: <Suspense fallback={<Loading />}><Cart /></Suspense>,
            },
            {
                path: "/menu",
                element: <Suspense fallback={<Loading />}><RestaurantMenu /></Suspense >,
            },
        ],
        errorElement: < Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)