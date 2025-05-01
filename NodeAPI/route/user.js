const expressObj = require("express")
let router = expressObj.Router({})
const fs = require('fs');

//to run this use the example below after doing npm start
// http://localhost:9000/CreateUser/Akash/Devops/601 4th street/28
router.get('/CreateUser/:name/:session/:address/:age',(req,res)=>{ //we can also do this using query string, we have to use req.query for that
    const userInfo = {
        name: req.params["name"],
        session: req.params["session"],
        address: req.params["address"],
        ade: req.params["age"]
    };
    fs.writeFileSync('userInfo.json', JSON.stringify(userInfo, null, 2));
    res.send('User information saved using route parameters.');
});

module.exports = router;
