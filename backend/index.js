

const { request } = require('express')
const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
// burada server yapariz socket io cekeriz fonksiyon yazarak 
//IO server acariy karsi tarafada

app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST']
    }
})

server.listen(3001,()=>{
    console.log('server ruu')
})