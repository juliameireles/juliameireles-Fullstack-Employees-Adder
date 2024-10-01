const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'juliaM148',
    database: 'employeesystem'

});

// creating  an api endpoint. Um API endpoint é o ponto de comunicação onde um serviço (como um servidor) espera receber solicitações de uma API
//  Cada endpoint corresponde a uma URL específica, associada a uma função ou recurso particular da API.
// Em outras palavras, é o "endereço" onde uma API recebe pedidos e envia respostas

app.post('/create', (req,res) => {
    console.log(req.body.name)
        const name = req.body.name
        const age = req.body.age
        const country = req.body.country
        const position = req.body.position
        const wage = req.body.wage

        db.query("INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)",[name,age,country,position,wage], 
        (err,result) => { 
            if (err) {
                console.log(err)
            }else{
                res.send("Values Inserted")
            }

        })

});


app.get('/employees',(req,res) => {
    db.query("SELECT * FROM employees",(err,result) => {
        if (err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
    
});


app.listen(3001,() => {
    console.log("your server is running on port 3001")
});
