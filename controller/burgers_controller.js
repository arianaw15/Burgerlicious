const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/',(req,res)=> {
    burger.selectAll(data=>{
        const object = {
            burgers:data,
        }
        console.log(object)
        res.render('index',object)
    });
});

router.post('/api/burger', (req,res) => {
    // console.log(req.body.burger);
    burger.insertOne(req.body.burger, (result)=>{
        res.json({ id: result.insertId });
    });
});

router.delete('/api/burger/:id', (req, res) => {
    const id = `${req.params.id}`;
    
  
    burger.deleteOne(id, (result) => {
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

module.exports = router;