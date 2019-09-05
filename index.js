const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('io', io);

app.use('/', (req, res) => {
    console.log('oi');
    res.render('index.html');
});

io.on('connection', socket => {
    console.log(`Socket: ${socket.id}`);
});

server.listen(3000);
