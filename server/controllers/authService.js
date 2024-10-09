//gather dependencies
const {Client} = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const config = require('../config.json')[process.env.NODE_ENV || "dev"];
// const bcrypt = require('bcrypt');
// const req = require('express/lib/request');



//establish port and connection string
const PORT = config.port
const client = new Client({
    connectionString: config.connectionString
})

//initialize modules and connect client
const app = express();
client.connect();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


//establish the authentication route
app.post('/auth', (req, res) => {

    const email = req.body.email;
    let inputPassword = req.body.password;
    let dbPassword;
    client.query(`SELECT passcode FROM usertable WHERE email='${email}'`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
           dbPassword = result.rows[0].passcode;
            // console.log('This is the user input pass -->', typeof inputPassword, inputPassword);
            // console.log('This is the DB pass -->', typeof dbPassword, dbPassword);
            bcrypt.compare(inputPassword, dbPassword, (err, result) => {
                if(err) {
                    console.log('bcrpyt error: ', err);
                    res.status(500).json('Bcrypt Error: Database/Hash error');
                } else if (result) {
                    // console.log(result)
                    client.query(`SELECT * FROM usertable WHERE email='${email}'`)
                    .then((user) => {
                        user.rows[0].isLoggedIn = true;
                        res.status(200).send(user.rows);
                    })
                } else {
                    // console.log(result);
                    res.status(400).json('Input Error: Input password does not match');
                }
            })

        }

    })



})