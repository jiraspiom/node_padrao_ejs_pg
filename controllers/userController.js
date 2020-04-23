var User = require("../models/user")

module.exports = {

    async index(req, res){
        const users = await User.findAll() 

        return res.json(users)
    },

    async new(req, res){
        const {nome , email} = req.body;
        
        const user = await User.create(nome, email)

        return res.json(user)
    }

}