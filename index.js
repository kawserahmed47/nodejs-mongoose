const mongoose = require('mongoose');

const Dishes = require('./models/dishes')

mongoose.connect('mongodb://localhost:27017/conFusion', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Database Successfully.");

  Dishes.create({
    name: 'Uthapizza',
    description: 'Test'
})
    .then((dish) => {
        console.log(dish);

        return Dishes.find({});
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

});





// connect.then((db) => {

//     console.log('Connected correctly to server');

//     var newDish = Dishes({
//         name: 'Uthappizza',
//         description: 'test'
//     });

//     newDish.save()
//         .then((dish) => {
//             console.log(dish);

//             return Dishes.find({});
//         })
//         .then((dishes) => {
//             console.log(dishes);

//             return Dishes.remove({});
//         })
//         .then(() => {
//             return mongoose.connection.close();
//         })
//         .catch((err) => {
//             console.log(err);
//         });

// });