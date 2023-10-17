const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const PORT = 3500
app.use(cors())
const loginRouter = require('./routes/loginRoute')
app.use('/login', loginRouter) 
// const signupRouter = require('./routes/signupRoute')
// app.use('/signup', signupRouter)
// app.post('/login', (req, res) => {
//     console.log(req.body)
//     let email = req.body.email;
//     let password = req.body.password;
//     res.send(`Email: ${email} Password: ${password}`);
//   });

//   app.post('/signup', (req, res) => 
//   {
//     let firstName = req.body.firstName;
//     let lastName = req.body.lastName;
//     let password = req.body.password;
//     res.send(`firstName: ${firstName} lastName: ${lastName} Password: ${password}`);
//   });

app.listen(PORT, console.log(`Server running at http://localhost:${PORT}/`))