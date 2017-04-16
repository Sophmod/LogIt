const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const bodyParser = require('body-parser'); 
const router = express.Router();

require('./user'); 
const User = mongoose.model('User');

const app = express(); 

let distDir = __dirname + "/dist/";
//Serves our angular app upon user landing on domain
app.use(express.static(distDir));

app.use(bodyParser.json());

//Allows access to our database outside of connect method
let db;
//Stores current logged in user for proper collection and data access 
let currentUser = '';
//Database credentials
let username = 'db7_user8'; 
let password = 'Password1';

//Create express server listening on port 3000
app.listen(3000, () => {
    console.log('Express started')
}); 

//Get main-menu for users authorized
app.get('/app/main-menu');

//Register a new user
app.post('/app/register', (req, res) => { 
    let newUser = new User ();
    newUser = req.body;

    db.collection('users').insertOne(newUser,(err, doc) => {
        if (!err) {
            res.sendStatus(200);
            console.log('User created');
        }
    }) 
});

//Log a user and verify data
app.post('/app/login', (req, res) => {
    let username = req.body.email;
    let password = req.body.password;
    let validated = {
        key: false
    };

    let cursor = db.collection('users').find({email: username, password: password});
    cursor.toArray((err, results) => {
        if (err) throw err;

        //If results is empty, log in did not match a user.
        if(!results.length) {
            res.send(validated);
        } else {
            validated.key = true;
            res.send(validated);
            currentUser = username; //Sets current user to the user who was just validated
        }
    });
});

//Logs flight data to DB, under collection with the same name as the user who submitted it.
app.post('/data/log-flight', (req, res) => {
    let newFlight = req.body;

    //Choose's the current logged in user's collection for storing flight data
    let collection = currentUser  

    //Inserts the parameter into the chosen collection
    db.collection(collection).insertOne(newFlight, (err, doc) => {
     if (!err) {
         res.sendStatus(200);
     }
    });
});

app.get('/data/flightLog', (req, res) => {
    let collection = currentUser;

    //Pulls all of the data in the flightData collection
    let cursor = db.collection(collection).find();
    cursor.toArray((err, results) => {
        //Handle errors
        
        res.send(results);
    });
});

//Connect to database
mongodb.MongoClient.connect('mongodb://' + username + ':' + password + '@ds155820.mlab.com:55820/test-land', (err, database) => {
    db = database;
    if (err) console.log(err);
    console.log('DB connected'); 
});

//##Routes for the SPA. Will handle the user refreshing the page, by resending the same page to Angular##
app.get('/sign-up', (req, res) => {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(distDir);
});

app.get('/log-in', (req, res) => {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(distDir);
});

app.get('/main-menu', (req, res) => {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(distDir);
});

app.get('/add-flight', (req, res) => {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(distDir);
});

app.get('/flight-log', (req, res) => {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(distDir);
});


//#########ERROR HANDLERS ###################

