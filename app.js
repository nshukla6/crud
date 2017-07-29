const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');

const router=require('./router/router');

const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://nshukla:hbti2ibm@ds129023.mlab.com:29023/contactlisting');

mongoose.connection.on('connected',()=>{
    console.log('connection succeed');
});

mongoose.connection.on('error',(error)=>{
    console.log('ERROR=>',error);
});

const port=process.env.PORT | 8080;
app.set('port',port);

app.use(express.static('public'));

app.use('/api',router);

app.get('/',(req,res,next)=>{
    res.send('hello world !');
})

app.listen(app.get('port'),()=>{
    console.log('server is listening on port ',app.get('port'));
});