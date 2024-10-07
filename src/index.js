import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
// Get the root element from the HTML document
const rootElement = document.querySelector("#root");

// If the root element is not found, throw an error
if (!rootElement) throw new Error("Failed to find the root h1");

// Create a root for the React application
const root = createRoot(rootElement);

// Render the MainContent component inside
root.render(<MainContent />);
