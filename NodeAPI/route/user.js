const expressObj = require("express")
let router = expressObj.Router({})
const fs = require('fs');

//to run this use the example below after doing npm start
// http://localhost:9000/CreateUser/Akash/Devops/601 4th street/28
// router.get('/CreateUser/:name/:session/:address/:age',(req,res)=>{ //we can also do this using query string, we have to use req.query for that
//     const userInfo = {
//         name: req.params["name"],
//         session: req.params["session"],
//         address: req.params["address"],
//         ade: req.params["age"]
//     };
//     fs.writeFileSync('userInfo.json', JSON.stringify(userInfo, null, 2));
//     res.send('User information saved')
// });

//Using Query String
//http://localhost:9000/CreateUser?Name=Hasini&Session=nodeJs&Address=Boston&Age=24
router.get('/CreateUser', (req, res) => {
    console.log(req.query);

    const userInfo = {
        name: req.query["Name"],       
        session: req.query["Session"],
        address: req.query["Address"],
        age: req.query["Age"]
    };

    // Basic validation -- without this, it will save whatever is given even if anything is missing, wont error out
    if (!userInfo.name || !userInfo.session || !userInfo.address || !userInfo.age) {
        return res.status(400).send("Missing required query parameters");
    }

    fs.writeFileSync('userInfo.json', JSON.stringify(userInfo, null, 2));
    res.send('User information saved successfully.');
});


module.exports = router;
