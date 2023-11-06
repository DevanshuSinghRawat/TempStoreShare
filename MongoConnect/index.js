const dbConnect = require('./connection')
const express = require('express');
const app = express();
app.use(express.json());

//     <<<-- ___GET API___ -->>>    //  Working Fine

app.get('/',async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.find().toArray();
    
    resp.send(result);
});

//  <<<-- ___INSERT API ___-->>>    //  Working Fine

app.post('/', async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.insertOne(req.body);
    // console.log(req.body);
    resp.send(result);
})

//  <<<--___PUT API___-->>>     //  Working Fine

app.put('/:name', async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.updateOne( {Name: req.params.name}, {$set: req.body} );
    console.log(result); 
    resp.send(" updated result");
})


//  <<<--___DELETE API___-->>>  // Working fine

app.delete('/:name', async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.deleteOne({Name: req.params.name});
    console.log(result);
    resp.send(result);
})

app.listen(5000);
