const mongoose= require('mongoose');

const {Schema} = mongoose;

const recordSchema = new Schema({
    key: {
        type :String
    },

    value: {
        type: String
      
    },
    createdAt:{
        type: Date
      
     },
     counts:{
         type:[Number]
         
     }
});
module.exports= mongoose.model('Record',recordSchema);

