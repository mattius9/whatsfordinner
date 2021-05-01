const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/whatsfordinner',
{useNewUrlParser: true, useCreateIndex: true}
);

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});