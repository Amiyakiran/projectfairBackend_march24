//import dotenv
 require('dotenv').config()//loads the environments
 //import express
 const express = require('express')
 //import cors
 const cors = require('cors')
 //import router
 const router = require('./routes')
 //import mongodb connection file
 require('./connection')
 //app- middlware
/*  const appmiddleware = require('./middleware/appMiddleware')
 */

 //create server
 const pfServer = express()
 //to connect with frontend
 pfServer.use(cors())

 //parse json formate - json()
 pfServer.use(express.json())

 //app middleware 
/*  pfServer.use(appmiddleware) */
 //router
 pfServer.use(router)

 //static - method is used to export a folder/file from the serverside
 //first argument - the name in which other application(frontend) should use this file/folder
 //sec argument - path of the file which need to be exported
 pfServer.use('/uploads',express.static('./uploads'))


 //Port
 const PORT = 4000 || process.env.PORT

 //Server checking the request recieved at port 
 pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
 })



 //logic

/*  pfServer.get('/get',(req,res)=>{
       res.send('get request recieved')
 })
 
 pfServer.post('/post',(req,res)=>{
    res.send('post request recieved')
})

pfServer.put('/put',(req,res)=>{
    res.send('put request recieved')
})

pfServer.delete('/delete',(req,res)=>{
    res.send('delete request recieved')
}) */