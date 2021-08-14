const { render } = require('ejs');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const confun=require('./controllers/control');

const dburl='link of mongodb';

mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
 .then(r=>app.listen(3000))
 .catch(e=>console.log('error'));

app.set('view engine','ejs');
//app.set('views','filenew');
app.use(express.static('public'));
//for input
app.use(express.urlencoded({extended:true}));

app.get('/',confun.indexf);
app.post('/',confun.saveinput);
app.get('/detail/:idn',confun.detailfun);
app.delete('/del/:idmn',confun.deletefun);

app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});
});
app.get('/blogs/cre',(req,res)=>{
    res.render('create',{title:'create'});
})
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});