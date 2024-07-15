// import express from "express"; // cannot use react when using express? 
import React from "react";
import ReactDOM from "react-dom/client";

// Import components 
import App from "./components/App.jsx";

// const port = 5000; 
// const app = express(); 

// app.get("/", (req, res) => {
//     res.sendFile("../index.html"); 
// })

// app.get("/start", (req, res) => {
//     res.sendFile();
// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`); 
// })

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
