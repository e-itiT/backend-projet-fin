const UserDTO = require("../dto/user-dto");
const User = require("../models/user-model");

const userMapper= user => new UserDTO(user.id,user.email,user.firstname,user.lastname,user.country,user.phone,user.server);

const userController={
    getAll:async(req,res)=>{
        const users=await User.find();
        res.status(200).json(users)
    },
    getByID:async(req,res)=>{
        const id=req.params.id;
        const user=await User.findById(id);

        if(!user){
            return res.sendStatus(404)
        }

        const userDTO=userMapper(user);
        res.status(200).json(user)
    },
    update:async(req,res)=>{
        const id=req.params.id;
        const {firstname,lastname,country,phone,server}=req.body
        const userUpdated=await User.findByIdAndUpdate(id,{firstname,lastname,pseudo,country,phone,server},{returnDocument:'after'});
        if(!userUpdated){
            return res.sendStatus(404);
        }
        const userDTO=userMapper(userUpdated);
        res.status(200).json(userDTO);
    },
    delete:async(req,res)=>{
        const id = req.params.id;
        const userToDelete=await User.findByIdAndDelete(id);
        if(!userToDelete){
            return res.sendStatus(404)
        }
        res.sendStatus(204)
    }
}
module.exports=userController;