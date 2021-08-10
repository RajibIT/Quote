const { urlencoded } = require('express');
const express = require('express')
var app = express();
app.use(express.json());
app.use(urlencoded({extended:false}));
app.set('views', 'templates');
app.set('view engine','ejs');
app.get('/',(req, res)=>{
    res.render('quote',{message:""});
})
app.post('/quote', (req, res)=>{
    var axios = require('axios');
    var data;
    
    axios.get('https://quotes.rest/qod').then((response)=>{
        console.log('here');
        data = response.data.contents.quotes[0].quote;
        res.render('quote',{message:`${data}`});
    }).then((err)=>{
        res.end(err);
    })
    
} )


app.listen(4000,()=>{
    console.log('server is running...')
})