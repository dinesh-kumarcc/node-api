const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
    res.send(list);
});

app.post("/create",async(req,res)=>{
 const data = req.body;
 await User.add({data});
 console.log("Data of Users",data);
 res.send({msg:"User Added"});
});

app.post("/update",async(req,res)=>{
    const id = req.body.id;
    delete res.body.id;
    const data = res.body
    await User.doc(id).update(data);
    res.send({msg:"User Updated"});
   });

   app.post("/delete",async(req,res)=>{
       const id = req.body.id;
       await User.doc(id).delete();
       res.send({msg:"deleted"});
   });

app.listen(5000,()=>console.log("Up & Running 5000"));