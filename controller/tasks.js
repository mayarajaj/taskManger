
const Task = require('../models/task');
const mongooes = require('mongoose');
const { findOne } = require('../models/task');
const task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const {creatCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req , res )=> {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
        

})

const getTask = asyncWrapper( async (req , res )=> {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID}); 
        if(!task){
            return next(creatCustomError('not found the task' , 404))
            }
        res.status(200).json({task});
        
    
})
const creatTask = asyncWrapper( async (req , res )=> {
        const task = await Task.create(req.body);
        res.status(201).json({task});
        
})
const updateTask = asyncWrapper( async (req , res )=> {
        const {id:taskID} = req.params ;
        const task = await Task.findOneAndUpdate({_id:taskID} , req.body , {
            new: true ,
            runValidators : true 
        });
        if(!task){
            return next(creatCustomError('not found the task' , 404))
        }
        res.status(200).json({task});
            
        
})
const deletTask = asyncWrapper( async (req , res )=> {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID}); 
        if(!task){
            return next(creatCustomError('not found the task' , 404))
        }
        
        res.status(200).json({task});
        
})


module.exports = {
    getAllTasks,
    getTask ,
    creatTask ,
    updateTask ,
    deletTask , 
};