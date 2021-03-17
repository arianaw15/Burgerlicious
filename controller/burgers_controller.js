const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/',(req,res)=> {
    burger.selectAll(data=>{
        const object = {
            burgers: data
        };
        console.log(object);
        res.render('all-burgers',object)
    });
});

module.exports = router;