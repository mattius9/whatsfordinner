const mongoose = require('mongoose');

/* mongoose.connect(process.env.DB_STRING,
 {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
 );*/


mongoose.connect('mongodb://localhost/whatsfordinner',
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
); 

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});