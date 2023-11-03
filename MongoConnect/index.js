const dbConnect = require('./connection')
const express = require('express');
const app = express();
app.use(express.json());

//     <<<-- ___GET API___ -->>>

app.get('/',async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.find().toArray();
    
    resp.send(result);
});

//  <<<-- ___INSERT API ___-->>>

app.post('/', async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.insertOne(req.body);
    // console.log(req.body);
    resp.send(result);
})

//  <<<--___PUT API___-->>>

app.put('/:name', async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.updateOne( {name: req.params.name}, {$set: req.body} );
    console.log(result); 
})

//  <<<--___DELETE API___-->>>

app.delete('/:name', async (req,resp)=>{
    let DB = await dbConnect();
    let result = await DB.deleteOne({name: req.params.name});
    console.log(result);
})

app.listen(5000);