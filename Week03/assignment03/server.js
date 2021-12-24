const express=require('express');
const app=express();
const port =3000;


app.get('/',(req,resp)=>{
    resp.sendFile(__dirname+"/index.html");
});

app.post('/register',(req,resp)=>{
    
  
        resp.sendFile(__dirname+"/success.html",(err,data)=>{
            if(err)
            {
            resp.sendFile(__dirname+"/error.html")
            }
        });
     
    
});

app.listen(port)