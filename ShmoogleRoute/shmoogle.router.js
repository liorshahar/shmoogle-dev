const express    = require('express');
const google_api = require('../googleApi/google_api.js');
const router     = express.Router();


router.get('/', async (req, res)=>{
   
    try{
        var response = await google_api.query_google_api('shenkar');
        res.status(200).send(response);
    }catch(error){
        res.status(400).send({'error': error});
    }
  
   
 
});

module.exports = router;