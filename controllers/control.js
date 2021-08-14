const mode=require('../models/cont');

const indexf=(req,res)=>{
    mode.find()
    .then((r)=>{
        res.render('index',{title:'home',blogs:r});
    })
    .catch((err)=>{
        console.log(err);
    })
}
const saveinput=(req,res)=>{
    const data=new mode(req.body);
    data.save()
    .then((re)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
}
const detailfun=(req,res)=>{
    const id=req.params.idn;
    mode.findById(id)
    .then((r)=>{
        res.render('detail',{title:'detail',blogs:r});
    })
    .catch((err)=>{
        res.render('404',{title:'page not found'});
    })
}
const deletefun=(req,res)=>{
    const id=req.params.idmn;
    mode.findByIdAndDelete(id)
    .then((r)=>{
    res.json({redirect:'/'})
    })
    .catch((err)=>{
    console.log(err);
    });
}
module.exports={
    indexf,
    saveinput,
    detailfun,
    deletefun
};