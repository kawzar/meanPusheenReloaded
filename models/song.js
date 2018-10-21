const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    lyrics:{
        type: String, 
        required: true
    },
    order:{
        type: Number,
        required: true
    }
})

const Song = module.exports = mongoose.model('songs', SongSchema);

module.exports.getAll = (callback) => {
    Song.find(callback);
}

module.exports.getById = (id, callback) => {
    Song.findById(id, callback);
}