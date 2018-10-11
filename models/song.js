const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    lyrics:{
        type: String, 
        required: true
    }
})

const Song = module.exports = mongoose.model('songs', SongSchema);

module.exports.getAll = (callback) => {
    Song.find(callback);
}