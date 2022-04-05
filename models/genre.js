var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema (
    {
        name:{type: String, required: true, maxLength: 100},

    }
)

//Virtual for author's URL 
GenreSchema
.virtual ('url')
.get(function() {
    return 'catagory/genre/' + this._id;
});

//export model 
module.exports = mongoose.model('Genre', GenreSchema);