const express = require("express")
const UserControlle = require("../controllers/userController")

const routes = express.Router()

routes.get("/users", UserControlle.index)
routes.post("/users", UserControlle.new)

module.exports = routes