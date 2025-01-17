import express from "express";

const admin = express.Router();

admin.get('/create/role',(req,res) =>{
    res.render('./form/role');
})

admin.get('/create/seance',(req,res) =>{
    res.render('./form/seance');
})

admin.get('/admin',(req, res) =>{
    res.render('./layouts/admin')
})
export default admin