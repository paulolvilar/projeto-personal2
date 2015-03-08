var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')
module.exports = function() {
var schema = mongoose.Schema({
login: {
type: String,
required: true,
index: {
unique: true
}
},
senha: {
type: String,
required: true,
},
nome: {
type: String,
required: true,
},
inclusao: {
type: Date,
default: Date.now
}
});
schema.plugin(findOrCreate);
schema.methods.validPassword=function(pass){return this.senha==pass}

return mongoose.model('Usuario', schema);
};