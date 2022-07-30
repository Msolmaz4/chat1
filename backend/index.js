

const { request } = require('express')
const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')

// burada server yapariz socket io cekeriz fonksiyon yazarak 
//IO server acariy karsi tarafadacors acizoruy sonra cors tanimliyoruy
const {Server} = require('socket.io')
app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST']
    }
})

//baglantiyi karsizya gondermek oldugumuy kontrol vr foksyon yayariy
io.on('connection' ,(socket)=>{
    console.log(`connection#;${socket.id}`)

//odaya baglanm{ak icn bir foks yayariy
socket.on('join_room' ,(data)=>{
    socket.join(data)
    console.log(`user id:${socket.id} join room:${data}`)
})  

// messai almak icin

            
    socket.on('send_message',(data)=>{
        //to ile ilgili room gondeririy bu chat gelen receive meadage ussefeceten gelen
        socket.to(data.room).emit('receive_message' , data)
    })

//baglantiyi koparmak icinde bunu yazariy
    socket.on('disconect',()=>{
        console.log('disconnect',socket.id)
    })
} )

server.listen(3001,()=>{
    console.log('server ruu')
})