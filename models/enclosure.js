const{Schema, model,Types}=require('mongoose');
const User = require('./user-model.js')
const DragoTurkey = require('./dragoturkey.js')


const enclosureSchema = new Schema({
    userID :{
        type: Types.ObjectId,
        required:true,
        ref:User,
    },
    turkeys:[{
    turkey: {
        type: Types.ObjectId,
        required:true,
        ref:DragoTurkey
    }
    }]
},{
    collection:'Enclosure',
    timestamp:true
})

const Enclosure= model('Enclosure',enclosureSchema);

module.exports= Enclosure;