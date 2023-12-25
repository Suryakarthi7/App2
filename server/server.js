const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "post123",
    database: "postgres"
})
client.connect( (err) =>{
    if(err){
        console.log('not connected')
    }else{
        console.log('connected is')
    }
})




/*app.get('/data', (req,res) =>{
    const sql1 = `select * from students`;
    client.query(sql1, (err, val) => {
        if(err){
            res.json(err)
        } else{
            //res.send(val)
            res.json(val.rows)
            console.log(val)
        }
    })
})*/

app.post('/send', (req,res) => {
    console.log(req.body.name)
    const val = req.body;
    
    /*const val1 = [
        req.body.id,
        req.body.last,
        req.body.name,
    ]*/
    // const { id,name,nextname } = req.body; => [id,name,nextname]
    const sql = `INSERT INTO students (id,last,name) VALUES (${val.id}, '${val.last}', '${val.name}')`;
    console.log(sql);
    client.query(sql, (err,data) => {
        if(err){
            //return ui 
            res.json(' data not send')   
            //console.log(err);
        }
        //return ui
        return res.json(data);
    })
})

app.put('/update', ( req, res ) =>{
    const val2 = req.body;
    
    const sql2 = `update students set last = '${val2.update2}' where id = ${val2.update1}`;
    console.log(sql2);
    client.query(sql2, (err,value) =>{
        if(err){
            console.log(err);
        }else{
            console.log('data update')
        }
    })
} )

app.delete('/delete/:one', (req,res) =>{
    const delete2 = req.params.one;
    const sql3 = `delete from students where id = ${delete2}`
    console.log(sql3);
    client.query(sql3, (err,val) =>{
        if(err){
            console.log(err)
        }else{
            console.log('data deleted')
        }
    })
})

app.listen(3001, () => console.log('running 3001'))