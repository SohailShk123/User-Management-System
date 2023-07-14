var {connect , connection} = require('mongoose');

const {MONGO_URL} = process.env;
// console.log(MONGO_URL)

connect(MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

connection.on('connected', ()=>{
    console.log('DataBase connection established')
})
connection.on('error', (err)=>{
    console.log('DataBase connection failed')
    // console.log(err)
})