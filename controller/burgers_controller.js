const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/',(req,res)=> {
    burger.selectAll(data=>{
        console.log({burgers: data})
        res.render('all-burgers',{burgers: data})
    });
});

// router.get('/', (req,res)=>{
//     burger.updateOne(data =>{
//         const updateObject = {
//             burgers: data
//         };
//         console.log(updateObject);
//         res.render('all-burgers', updateObject)
//     });
// });

module.exports = router;