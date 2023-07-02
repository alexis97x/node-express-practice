// const express = require('express')
// const mysql = require('mysql')
// const app = express()
// app.use(express.json())
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodejsdb'
// })

// app.get('/', (req, res) => {
//     res.send('<h1> HELLo GeAtay!</h1>')    
// })

// app.get('/messages', (req, res) => {
//     db.query('SELECT * FROM messages', (error, result) => {
//         if(error) {
//             throw error
//         }
//         else {
//             res.send(JSON.stringify(result))
//         }
//     })
// })

// app.get('/messages/:id', (req, res) => {
//     db.query(`SELECT * FROM messages WHERE id = ${req.params.id}`, (error, result) => {
//         if(error) {
//             throw error
//         }
//         else {
//             console.log(result)
//             if(result.length === 0) {
//                 res.status(404).send('no messages found bai')
//             }
//             else {
//                 res.send(JSON.stringify(result))
//                 console.log('actually false?')
//             }
//         }
//     })
// })

// app.post('/messages', (req, res) => {

//     db.query(`INSERT INTO messages (sender, message) VALUES ('${req.body.sender}', '${req.body.message}')`, (error, result) => {
//         if(error) {
//             throw error
//         }
//         else {
//             res.send(result)
//         }
//     })
// })

// app.delete('/messages/:id', (req, res) => {
//     console.log(req.params.id)
//     db.query(`DELETE FROM messages WHERE id = ${req.params.id}`, (error, result) => {
//         if(error) {
//             throw error
//         }
//         else {
//             res.send('<h1> DELETED SUCCESSFULLY BRO</h1>')
//         }
//     })
// })

// app.put('/messages/:id', (req, res) => {
//     db.query(`UPDATE messages SET sender = '${req.body.name}', message = '${req.body.message}' WHERE id = '${req.params.id}'`, (error, result) => {
//         if(error) {
//             throw error
//         }
//         else {
//             res.send(result)
//         }
//     })
// })



// app.listen(5069, () => console.log("listening na bai"))

