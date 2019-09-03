const server = require('express')();
const bodyParser = require('body-parser');

const getTodosList = require('./logic/getTodosList');
const registerUser = require('./logic/registerUser');
const updateTodos = require('./logic/updateTodos');

const port = 4088;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.listen(port);


server.get('/', (req, res) => {
    res.send(`You're on the server!`);
    res.end();
});

server.post('/register', (req, res) => {
    res.send(`You're on register page`);
    res.end();
});

server.post('/getTodosList', async (req, res) => {
    const { userName, password } = JSON.parse(req.body.userData);
    const queries = await getTodosList(userName, password);
    res.send(queries);
    res.end();
});

server.post('/updateTodos', (req, res) => {
    res.send(`You're on updateTodos page`);
    res.end();
});

