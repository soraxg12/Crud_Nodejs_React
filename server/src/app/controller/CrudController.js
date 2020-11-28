const Items = require('../models/Crudmodel')

class userController{
    async Create(req,res){
        const {name,price,description}=req.body;

        try{
            const createItem = await Items.create({name,price,description})

            return res.status(200).json(createItem)
        }catch(err){
            return res.status(400).json(err)
        }

    }

    async index(req,res){
        const items = await Items.find()

        try{
            return res.status(200).json(items)
        }catch(err){
            return res.status(400).json(err)
        }
    }

    async update(req,res){
        const {_id} = req.params
        const {name,price,description}=req.body;

        
        try{
            const updated = await Items.update({_id},{name,price,description})

            return res.status(200).json(updated)
        }catch(err){
            return res.status(400).json(err)
        }
    }

    
    async delete(req,res){
        const {_id} = req.params

        try{
            const deleted = await Items.deleteOne({_id})

            return res.status(200).json(deleted)
        }catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = new userController()