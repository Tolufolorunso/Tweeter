require('dotenv').config();

const app = require('./app');
const connectDB = require('./configs/connectDB');
// const server = http.createServer(app);
const http = require('http').Server(app);

const io = require('socket.io')(http, {
  pingTimeout: 60000,
  cors: {
    origin: 'http://localhost:3000',
  },
});

let DB;

if (process.env.NODE_ENV === 'development') {
  DB = process.env.MONGO_LOCAL;
} else {
  DB = process.env.MONGO_URI;
}

const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  try {
    await connectDB(DB);
    console.log('DB connection started...');
    http.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(`ERROR OCCUR: ${error}`);
  }
};

startServer();

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('setup', (h) => {
    console.log(h);
  });
});

io.on('connect_error', (err) => {
  console.log(`connect_error due to ${err.message}`);
});
