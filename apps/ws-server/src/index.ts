import { WebSocketServer } from "ws";
import { prismaClient } from "../../../packages/prisma/src/index"


const wss=new WebSocketServer({port:8080});

wss.on("connection",(socket)=>{
    try{
        prismaClient.User.create({
            username:Math.random().toString(),
            passord:Math.random().toString()
        })
        socket.send("alive");
    }catch(e){
        socket.send("dead");
        console.log("error: "+e);
    }
})