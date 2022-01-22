const Record = require('../model/record');

module.exports.getRecords =async function (reqBody){

    const projectPipeline = {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: { $sum: "$counts" }
      };
    const matchPipeline = {
        createdAt: {
          $gte: new Date(reqBody.startDate),
          $lte: new Date(reqBody.endDate)
        },
        totalCount: {
          $gte: reqBody.minCount,
          $lte: reqBody.maxCount
        }
      };
  
      try {
        const records = await Record.aggregate([
          {
            $project: projectPipeline
          },
          { $match: matchPipeline }
        ]);
        return { status: "success", records };
      } catch (err) {
        return { status: "failure", msg: err };
      }
};

