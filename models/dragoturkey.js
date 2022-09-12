const{Schema, model}=require('mongoose');


const turkeySchema=new Schema({
    color:{
        type:String,
        required:true
    },
    generation:{
        type:Number,
        required:true,
        min:1,
        max:10
    },
    genetic:{
        reproductive:{
            type:Boolean,
            default:false
        },
        predisposed:{
            type:Boolean,
            default:false
        }
    },
    sex:{
        type:String,
        enum:['M','F'],
        required:true
    }
},{
    collection:'DragoTurkey',
    timestamps:true
})

const DragoTurkey = model('DragoTurkey',turkeySchema);

module.exports= DragoTurkey;