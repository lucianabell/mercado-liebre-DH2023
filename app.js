const express= require('express');
const path=require('path');
const app=express();

//levatar nuestro servidor
let port = process.env.PORT || 3030;
app.listen(port,() => console.log (`Servidor corriendo en el puerto ${port}`));


app.use(express.static('public'));

app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
});
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'));
});

