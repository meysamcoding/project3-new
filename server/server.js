const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');

var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const app = express()

// Route requires
const user = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes


// Starting Server 

// connecting our Gmail smpt host
var transport = {
	host: 'smtp.gmail.com',
	port: 587,
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

router.post('/send', (req, res, next) => {
	var name = req.body.name
	var email = req.body.email
	var message = req.body.message
	var content = `name: ${name} \n email: ${email} \n message: ${message} `

	var mail = {
		from: name,
		to: 'dreamstoryagency@gmail.com',
		subject: 'New Message from costumer',
		text: content
	}


	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail'
			})
		} else {
			res.json({
				status: 'success'
			});

			transporter.sendMail({
				from: "<dreamstoryagency@gmail.com>",
				to: email,
				subject: "Submission was successful",
				text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
			}, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Message sent: ' + info.response);
				}
			})
		}
	})
})


//   const app = express()
app.use(cors())
app.use(express.json())
app.use('/user', user)
app.use('/', router)
app.listen(3002)
console.log(process.env.PORT)