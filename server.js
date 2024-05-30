// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
// declare static path
let staticPath = path.join(__dirname, "public");
//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());

app.get("/index", (req, res) => {
    res.sendFile(path.join(staticPath, "./index.html"));
})
//signup route
app.get('./_signup', (req, res) => {
    res.sendFile(path.join(staticPath, "./_signup.html"));
})

app.post('./_signup',(req, res)=>{
    console.log(req,body);
    res.json('data recieved');

})

//404 route
app.get('/404',(req, res) =>{
    res.sendFile(path.join(staticPath, "404.html"));
})
app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})