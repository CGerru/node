var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Person = mongoose.model('Person', personSchema);
module.exports = Person;