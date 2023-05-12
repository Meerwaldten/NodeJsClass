import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A client connected with ID: ", socket.id);

    socket.on("client chose a color", (data) => {
        //socket.broadcast.emit("a color was chosen", data); //broadcast.emit sends to all other sockets but the one it sends from
        io.emit("a color was chosen", data); // emiter til alle clients samtidig
        //socket.emit("a color was chosen", data); //emit sends to only the socket
    });
    
    /* Test af hvordan man sender json data rundt, bruger "ready event" som er kaldt i både metoden og i index.html
    socket.on("ready event", (data) => {
        console.log("From the ready event: ", data.data);
    });
    */


});


const PORT = 8080;
server.listen(PORT, () => console.log("Server is running on: ", PORT));