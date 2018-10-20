var mongoose = require('mongoose');

var Person = require('./model/person.js');
var Corporation = require('./model/corporation.js');

mongoose.connect('mongodb+srv://nodeapp:r2CabS33aX0oPqwf@cluster0-rl97l.mongodb.net/test?retryWrites=true', 
  function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Connection Successfull');
    }
});

var newUser = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: {
    firstName: 'Carlos',
    lastName: 'Gerru Barrios'
  }
});
newUser.save(function(err){
  if (err) {
    throw err;
  } else {
    console.log('User added successfully');
  }
});