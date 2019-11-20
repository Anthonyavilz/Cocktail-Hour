require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('./Controllers/sendEmailController');
const app = express();
const massive = require('massive');
const session = require('express-session');
const {register, login, logout} = require('./Controllers/authController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

var transport = {
    host: 'smtp-mail.outlook.com',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

app.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content}`

    var mail = {
        from: name, 
        to: 'phillip.avila@outlook.com',
        subject: '',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

module.exports = router;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("*presses enter on keyboard* I'm in");
});

//Auth Endpoints
app.post('/auth/user/new', register)
app.post('/auth/user/login', login)
app.post('/auth/user/logout', logout)

//Bar Endpoints
app.post('/api/bars', ) //add a bar
app.get('/api/bars', ) //get all bars
app.get('/api/bars/:barId', ) //get one bar
app.put('/api/bars/:barId', ) //edit the bar
app.delete('/api/bars/:barId', ) //delete bar

//Drinks Endpoints
app.post('/api/drinks', ) //add a drink
app.get('/api/drinks', ) //get all drinks
app.get('/api/drinks/:drinkId', ) //get one drink
app.put('/api/drinks/:drinkId', ) //edit the drink
app.delete('/api/drinks/:drinkId', ) //delete drink

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));