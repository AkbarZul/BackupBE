const mysql = require("mysql");
const app = require("./index");
const http = require("http");
const socketio = require("socket.io");

//socket io
const server = http.createServer(app);
const io = socketio(server).sockets;
io.on("connection", (socket) => {
  const id = socket.handshake.query.user_id;

  console.log("a user connected ...", id, socket.id);

  socket.join(id);

  socket.on("chat message", (msg, id_recepient) => {
    console.log(msg);
    //console.log(msg.sender);
    console.log(id_recepient);
    io.to(id_recepient).to(id).emit("chat message", msg);
  });
});
//socket io

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "akbar",
  password: "31maret",
  database: "backup",
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

const port = 9005;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});