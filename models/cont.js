const mongoose=require('mongoose');
const sch=mongoose.Schema;

const content=new sch({
    title:{type:String,
           required:true
    },  
    snippet:{type:String,
             required:true
    }, 
    content:{type:String,
          required:true
    }
},{timestamps:true});

const mod=mongoose.model('data',content);
module.exports=mod;