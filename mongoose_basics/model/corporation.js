var mongoose = require('mongoose');

var corporationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Corporation = mongoose.model('Corporation', corporationSchema);

module.exports = Corporation;