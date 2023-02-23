const express = require('express');
const app = express();
const cors = require('cors');
const { port } = require('./core/config');
const { errorHandler, invalidRoute } = require('./utility/errorHandler');
const User = require('./model/user.model');


// app.get('',async (req,res)=>{
//     try {
//         let added = await User.create({
//             name:"Subham",
//             email:'subham@gmail.com',
//             password:'subham@23',
//             type:'Admin'
//         })
//         let list = await User.findAll();
//         res.send(added)
//     } catch (error) {
//         res.send('Error is gettings ' + error)
//     }
// })



 
require('./core/dbConnection');

app.use( express.json( { type: 'application/json' } ) );
app.use( cors() );

// const router = require('./router');
// app.use( '/api', router ); 
app.use( invalidRoute );
app.use( errorHandler );

app.listen( port, () => {
    console.log( `App listen on port ${ port }` );
} )