const{Schema, model}=require('mongoose');

const userSchema=new Schema({
    pseudo:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required: true,
        trim
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        enum:['User','Admin','Moderateur'],
        required:true,
        default:'User'
    },
    server:{
        type:String,
        required:true,
        trim:true
    }
},  {
        collection:'User',
        timestamps:true
    }   
);

const User = model('User',userSchema);

module.exports=User;