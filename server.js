const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté')
    
    socket.on('disconnect', () => {
        console.log('Un utilisateur c\'est déconecté')
    })


    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    });
});

app.get('/admin', (req, res) => {
    res.sendFile(`${__dirname}/public/admin.html`)
})


server.listen(5000, () => {
    console.log('Ecout sur le port 5000')
});
