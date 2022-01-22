module.exports={
    errorResponse: (statusCode, errMessage)=>{
    return {code: statusCode,
        msg:"Failure",
        reason:errMessage}},

    successResponse: (data)=>{
        return {code:0,
            msg:"Success",
            records:data}},
};
