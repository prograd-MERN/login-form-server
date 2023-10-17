const data = require('../Data/userData')

const loginExistingUser = (request, response) => {
const {email, password} = request.body
data.map(iterator=>{
    if(iterator.email === email&&iterator.password === password)
    {
       return response.status(200).json({message:"Successfull Login"})
    }
    return response.status(401).json({message:"Authentication denied"})
})
}
module.exports = {loginExistingUser}
