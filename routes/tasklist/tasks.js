var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://usr:password@ds145667.mlab.com:45667/redo', ['tasks']);


//Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if (err){
            res.send(err);
        }

        res.json(tasks);
    });

});

//Get Single Task
router.get('/task/:id', function(req, res, next){
    //db.collectionName
    db.tasks.findOne(
        {_id: mongojs.ObjectId(req.params.id)},
        function(err, task){
            if (err){
                res.send(err);
            }

            res.json(task);
        }
    );

});

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if (!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.tasks.save(task,  function(err, task){
            if (err){
                res.send(err);
            }

            res.json(task);
        });
    }
});

//Delete Task
router.delete('/task/:id', function(req, res, next){
    //db.collectionName
    db.tasks.remove(
        {_id: mongojs.ObjectId(req.params.id)},
        function(err, task){
            if (err){
                res.send(err);
            }

            res.json(task);
        }
    );

});


//Update Task
router.put('/task/:id', function(req, res, next){
    //db.collectionName
    var task = req.body;
    var updatedTask = {};

    if (task.isDone){
        updatedTask.isDone = task.isDone;
    }

    if (task.title){
        updatedTask.title = task.title; 
    }

    if (!updatedTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        })
    }else{
        db.tasks.update(
            {_id: mongojs.ObjectId(req.params.id)},
            updatedTask,
            {},
            function(err, task){
                if (err){
                    res.send(err);
                }

                res.json(task);
            }
        );
    }

    

});
module.exports = router;