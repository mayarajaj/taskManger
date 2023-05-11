const mongooes = require('mongoose');

const taskSchema = new mongooes.Schema({
    name:{
        type:String ,
        required:[true , 'you must put ur name'],
        maxlength: [15 , 'name must be less than 15 charecters'] , 
        minlength:[5 , 'name must be more than 4 charecters'] ,
        
        trim: true , 
    } , completed:{
        type:Boolean ,
        default:false 
    } ,
})
module.exports = mongooes.model('Task' , taskSchema);