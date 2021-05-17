const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/',(req,res)=> {
    burger.selectAll(data=>{
        const object = {
            burgers:data,
        }
        console.log(object)
        res.render('all-burgers',object)
    });
});

router.post('/api/burger', (req,res) => {
    // console.log(req.body.burger);
    burger.insertOne(req.body.burger, (result)=>{
        res.json({id:result.insertId});
    });
})


router.get('/', (req,res)=>{
    burger.updateOne(data =>{
        const updateObject = {
            burgers: data
        };
        console.log(updateObject);
        res.render('all-burgers', updateObject)
    });
});

module.exports = router;