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
const TitleComponent = () => {
    return <h1 className="head">Namaste React 💻🚀</h1>
}
const ParaComponent = () => {
    return <p className="para"> Hello I'm Bharat Dhiman <br /> MERN stack developer</p>
}

// ! can inject any JavaScript code in JSX using {javascript code}
const data = 10000;
const HeadingComponent = () => {
    return <div id="container">
        <TitleComponent />
        <ParaComponent />
        <h1>Namaste React using Functional Component</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);