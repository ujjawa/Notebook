const { render } = require('ejs');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const confun=require('./controllers/control');
const mode=require('./models/cont');

//const dburl='link of mongodb';

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

app.post('/upd/:id',confun.updatefun);

app.get('/upd/:id',(req,res)=>{
    const id=req.params.id;
    mode.findById(id)
    .then((r)=>{
        res.render('update',{title:'update',blogs:r});
    })
    .catch((err)=>{
        res.render('404',{title:'page not found'});
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});
});
app.get('/blogs/cre',(req,res)=>{
    res.render('create',{title:'create'});
})
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});