var mongoose = require('mongoose');
//mongo db native driver ,
// mongoose ORM = mongoose Object Relational Mapping

//promise comes form the blue birds it got integrated by the bluebird

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppNew');
// mongoose.connect('mongodb://A1bhinish:Nishuraj_13@ds119436.mlab.com:19436/todosapp');


module.exports = {
    mongoose
};