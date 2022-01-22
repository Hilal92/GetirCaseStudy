const express= require('express');
const {errorResponse, successResponse}= require('../helper/response') ;
const {recordItemSchema, validateData} = require('../validation/record_validation');
const {getRecords} = require('../controllers/record_controller');


function routes () {
    const recordRouter = express.Router();
   
    recordRouter.route('/records')
    .post(async(req,res)=>{
        const reqBody = req.body;
        console.log("Request body :",req.body);
        const result = await validateData(reqBody, recordItemSchema);

      if (result.error) {
          return res.status(400).send(errorResponse(400, result.error.message));
        }
        else{
          console.log("Response is  valid!!");
        }

        //fetch  records 
     const response = await getRecords(reqBody);

     if (response.status == "failure") {
        return res.status(500).send(errorResponse(500, response.msg));
      }
      res.send(successResponse(response.records));
     });
  
    return recordRouter;
}

module.exports=routes;

