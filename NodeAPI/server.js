let express =require('express') 
const app = express()

const userRoute = require("./route/user")
app.use("/",userRoute)


console.log("rest api is listening at 9000")

app.listen(9000)