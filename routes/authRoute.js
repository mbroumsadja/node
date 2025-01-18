import express from "express";
const auth = express.Router();


auth.get('/auth/login',(req, res) =>{
    res.render('./auth/login');
});

auth.get('/auth/register',(req, res) =>{
    res.render('./auth/register');
});

auth.get('/auth/form',(req, res) =>{
    res.render('./auth/form');
});

export default auth;


