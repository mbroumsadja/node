import express from "express";

const principale = express.Router();

principale.get('/',(req, res) =>{
    res.render('./layouts/index');
});

principale.get('/auth',(req,res) =>{
    res.render('./layouts/main');
})

export default principale;