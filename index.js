const express = require('express')
const mysql = require('mysql')
const app = express()
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsdb'
})

app.get('/', (req, res) => {
    res.send('<h1> HELLo GeAtay!</h1>')    
})

app.get('/messages', (req, res) => {
    db.query('SELECT * FROM messages', (error, result) => {
        if(error) {
            throw error
        }
        else {
            res.send(JSON.stringify(result))
        }
    })
})

app.get('/messages/:id', (req, res) => {
    // res.send(res.send(req.params))
    db.query(`SELECT * FROM messages WHERE id = ${req.params.id}`, (error, result) => {
        if(error) {
            throw error
        }
        else {
            res.send(JSON.stringify(result))
        }
    })
})

app.listen(5069, () => console.log("listening na bai"))