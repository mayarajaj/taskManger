const express = require('express');
const router = express.Router();

const { 
    getAllTasks ,
    getTask , 
    deletTask ,
    creatTask ,
    updateTask,} 
= require('../controller/tasks');

router.route('/').get(getAllTasks).post(creatTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deletTask);

module.exports= router;