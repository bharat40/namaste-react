import React from "react";
import ReactDOM from "react-dom/client";

// for displaying anything onto the browser we use ReactDOM



// React.createElement() -> React Element -> JS object -> when we render this element onto DOM this becomes HTML element 
// const heading = React.createElement(
//     "h1",
//     { id: "heading-1" },
//     "Namaste React 🚀"
// );




// JSX -> is NOT HTML in JS -> it is HTML like syntax
const jsxHeading = <h1 className="head" tableIndex="5">Namaste React 🚀</h1>
// JSX -> babel in parcel transpile it into React.createElement() -> React Element -> JS object -> when we render this element onto DOM this becomes HTML element 

// React component
// class based component - OLD
// functional component - NEW

// ? what is a React functional component?
// just a normal JavaScript function which returns some normal piece of JSX
// ! name it with a CAPITAL letter, otherwise it will give error

// below is example
// const TitleComponent = () => {
//     return <h1 className="head">Namaste React 💻🚀</h1>
// }
// const ParaComponent = () => {
//     return <p className="para"> Hello I'm Bharat Dhiman <br /> MERN stack developer</p>
// }

// ! can inject any JavaScript code in JSX using {javascript code}
// const data = 10000;
// const HeadingComponent = () => {
//     return <div id="container">
//         <TitleComponent />
//         <ParaComponent />
//         <h1>Namaste React using Functional Component</h1>
//     </div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);




/**
 * ! Header
 *      * Logo
 *      * Nav Items
 * ! Body
 *      * Search bar
 *      * Restaurant container
 *      * Restaurant card
 *          * Image
 *          * Name
 *          * Star rating
 *          * Cuisine
 *          * Delivery time
 *  ! Footer
 *      * Copyright
 *      * Links
 *      * Address
 *      * Contact
 */


const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg" className="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <a href="https://bharat40.github.io/FOODNOOK-restaurant/">
                <img alt="res-logo" className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ezesxd6ovt0obvosm3nv" />
                <h3>FoodNook</h3>
                <h5>Pizza, Noodles, Biryani</h5>
                <h5>4.5 Starts</h5>
                <h5>30 minutes</h5>
            </a>
        </div >
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="restaurant-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);