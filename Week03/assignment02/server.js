const express = require('express')

const e= express();
e.get('/',(req,resp)=>{
   resp.send('Get Called')
})
e.post('/',(req,resp)=>{
   resp.send('Post Called')

})
e.put('/',(req,resp)=>{
    resp.send('Pust Called')
 
 })
 e.delete('/',(req,resp)=>{
    resp.send('Delete Called')
 
 })

e.listen(5000);