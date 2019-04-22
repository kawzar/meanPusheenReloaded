const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    content:{
        type: String, 
        required: true
    }
})

const Document = module.exports = mongoose.model('documents', DocumentSchema);

module.exports.getAll = (callback) => {
    Document.find(callback).sort('title');
}

module.exports.getById = (id, callback) => {
    Document.findById(id, callback);
}

module.exports.getFiltered = (filter, callback) => {
    Document.find({'content' : new RegExp(filter, 'i')}, function(err, docs){
        callback(err, docs);
    });
}