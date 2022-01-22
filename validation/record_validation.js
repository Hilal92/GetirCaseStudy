const Joi= require('joi');

module.exports.recordItemSchema=Joi.object({
    startDate: Joi.string().required().isoDate(),
    endDate: Joi.string().isoDate().required(),
    minCount: Joi.number().required().integer().less(Joi.ref('maxCount')),
    maxCount: Joi.number().required().integer()
});

module.exports.validateData = async function (data, schema) {
    return schema.validate(data, { abortEarly: false });
  };
  
