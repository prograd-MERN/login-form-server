const data = require('../Data/userData')

const signinExistingUser = (request, response) => {
const {firstName, lastName, password} = request.body
data.map(iterator=>{
    if(iterator.firstName === firstName && iterator.lastName === lastName && iterator.password === password)
    {
       return response.status(200).json({message:"Successfull signing in"})
    }
    return response.status(401).json({message:"Authentication denied"})
})
}
module.exports = signinExistingUser
