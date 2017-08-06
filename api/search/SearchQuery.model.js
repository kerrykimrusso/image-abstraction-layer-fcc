const mongoose = require('mongoose');

module.exports = mongoose.model('search_query', new mongoose.Schema({
    term: {
        type: String,
        required: true,
        trim: true
    },
    when: {
        type: Date,
        default: () => new Date()
    }
}));