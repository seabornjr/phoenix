//gather dependencies
const {Client} = require('pg');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
var cors = require('cors');
const config = require('../config.json')[process.env.NODE_ENV || "dev"];
const bcrypt = require('bcrypt');
const req = require('express/lib/request');
const { faClinicMedical } = require('@fortawesome/free-solid-svg-icons');


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

// set up storage environment for profile photo
const Storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './images');
    },
    filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
  });
  
  const upload = multer({ storage: Storage });


//set the root path

app.get('/', (req, res) => {
    res.send("Welcome to Rising Pheonix API. Select an endpoint. aka learner");
})

//READ: read all data in learners table
app.get('/learner', (req, res)=> {
    try {
        client.query('SELECT * FROM learner;')
        .then(result =>{
            res.status(201).send(result.rows)
        })
    } catch (error) {
        res
        .status(500)
        .json({ message: "Error in invocation of route /user" })
    }
})

//READ: select a learner by ID
app.get('/learner/:id', (req, res) => {
    try {
        client.query('SELECT * FROM learner WHERE learner_id = ' + req.params.id)
        .then(result => {
            res.status(200).send(result.rows)
        })
    } catch (error) {
    }
})

//CREATE: POST a new learner account to the the learner table using email and password
app.post('/learner', (req, res) => {
    try {
    const { learner_password } = req.body;
    const { learner_email } = req.body;
    
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(learner_password, salt, function(err, hash) {
            client.query(`INSERT INTO learner (learner_email, learner_password) VALUES ('${learner_email}', '${hash}')`)
            .then(() => res.status(201).json('Account Created'))
            .catch((error) => console.log(error))
        }); 
})
    } catch (error) { }
})

//POST: Create a post route to updload profile picture
app.post('/api/upload', upload.array('photo', 3), (req, res) => {
    console.log('file', req.files);
    console.log('body', req.body);
    res.status(200).json({
      message: 'success!',
    });
  });

//UPDATE: PATCH registration information using learner id
app.patch('/learner/:id', (req, res) => {
    try {
        const learner_id = req.params.id;
        const  first_name = req.body.first_name;
        const  last_name = req.body.last_name;
        const  gender  = req.body.gender;
        const date_of_birth = req.body.date_of_birth;
        const city = req.body.city;
        const state_abbrv = req.body.state_abbrv;

        client.query(`SELECT * FROM learner WHERE learner_id = '${learner_id}'`)
        .then(result => {
            if (result.rows.length) {
                client.query(`UPDATE learner SET (first_name, last_name, gender, date_of_birth, city, state_abbrv) = ($1, $2, $3, $4, $5, $6)`, [first_name, last_name, gender, date_of_birth, city, state_abbrv ])
                .then(() => res.status(201).json('Account Updated with Name, Gender, DOB, City, State'))
                .catch((error) => console.log(error))
            }
            else {
                res.status(404).send("Sorry can't find that!")
            }
        })
    } catch (error) {
        console.log(error)
    }
})


//UPDATE:PATCH leaner data to include grade and school information
app.patch('/learner_grade/:id', (req, res)=>{

    const grade = req.body.grade;
    const school = req.body.school;

    try {
        client.query('SELECT * FROM learner WHERE learner_id = ' + req.params.id)
        .then(result => {
            if (result.rows.length) {
                client.query(`UPDATE learner SET (grade, school) = ($1,$2)`, [grade, school])
                .then(()=>{res.status(201).json('Account updated with grade and school')})
                .catch((error)=>console.log(error))
            }
        })
    } catch (error) {
        console.log(error);
    }
})

//monitor the port for activity and inform the user in the console
app.listen(PORT, () =>{
    console.log(`Our app is running on port ${PORT}`)
})