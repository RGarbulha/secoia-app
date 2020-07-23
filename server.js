// import express from 'express';
// import path from 'path';

// const port = process.env.PORT || 8080;
// const server = express();

// server.use(express.static('build'));

// // Redirect Users to "index.html" if route not accessed using client side routing
// server.use((req, res) => {
//     res.sendFile(path.join(__dirname + "/public/index.html"));
// });

// server.listen(port, ()=>{
//     console.log("listening on port: " + port);
// });

const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('build'));

// Redirect Users to "index.html" if route not accessed using client side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => {
    console.log("listening on port: " + port);
});