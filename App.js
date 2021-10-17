const express = require("express")

const app = express()
//function -> route path
//frontend -> req -> 
app.use(express.json())   // iske bina 'body' mai kuch dikhega nai
app.use(express.static('public'))

// app.get("/user", function (req, res) {
//     console.log("Thank you for making request on our server")
// })

// app.get('/', function (req, res) {
//     res.send("<h1>Hello From Backend</h1>")
// })

// let obj = {
//     name: "Rupali"
// }

let user = []

function signUpUser(req, res) {
    let { email, password, name } = req.body
    console.log("user", req.body)
    user.push({
        email, password, name
    })
    res.status(200).json({
        message: "user created",
        createdUser: req.body
    })
}

function loginUser(req, res) {

}

function getUser(req, res) {
    console.log("users")
    // for sending key value pair
    res.json(obj)
}

function getuserbyId(req, res) {
    console.log(req.params.id)
    res.status(200).json(user)
}

function createuser(req, res) {
    console.log("req.data", req.body)
    res.status(200).json(req.body)
}

function updateUser(req, res) {
    let obj = req.body
    for (let key in obj) {
        user[key] = obj[key]
    }
    res.status(200).json(user)
}

function deleteUser(req, res) {
    user = {}
    res.status(200).json(user)
}

// middleWare
function setCreatedAt(req, res, next) {
    req.body.createdAt = new Data().toISOString()
    // return res.json({
    //     text : "Bye Bye"
    // })
    next()
}


const UserRouter = express.Router()
const authRouter = express.Router()
//mounting in express
app.use('/api/user', UserRouter)

UserRouter.route("/")
    .get(getUser)
    .post(createuser)
    .patch(updateUser)
    .delete(deleteUser)

UserRouter.route("/:id").get(getuserbyId)

authRouter.post("/signup", setCreatedAt, signUpUser).post("/login", loginUser)


// // getting data from server
// app.get("/api/user", getUser)

// //template routes
// app.get("api/user/:id", getuserbyId)
// // giving data from server
// app.post("/", createuser)

// app.patch("/api/user", updateUser)

// app.delete("/api/user", deleteUser)

app.listen(8080, function () {
    console.log("server started")
})
