/**
 * <div id="parent-container">
 *     <div id="first-child-container">
 *          <h1 id="heading1">I am h1 tag</h1>
 *          <h2 id="heading2">I am h2 tag</h2>
 *      </div>
 *     <div id="second-child-container">
 *          <h1 id="heading1">I am h1 tag</h1>
 *          <h2 id="heading2">I am h2 tag</h2>
 *      </div>
 * </div>
 */

import React from "react";
import ReactDOM from "react-dom/client";


const parentDiv = React.createElement("div", { id: "parent-container" }, [
    React.createElement("div", { id: "first-child-container" }, [
        React.createElement("h1", { id: "heading1" }, "This is namaste react"),
        React.createElement("h2", { id: "heading2" }, "I am h2 tag")
    ]
    ),
    React.createElement("div", { id: "second-child-container" }, [
        React.createElement("h3", { id: "heading3" }, "I am h3 tag"),
        React.createElement("h4", { id: "heading4" }, "I am h4 tag")
    ]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);