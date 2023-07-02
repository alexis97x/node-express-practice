// const express = require('express')
// const mysql = require('mysql')

// const app = express()
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodejsdb'
// })

// app.get("/", (req, res) => {
//     res.send("<h1> HELLO BOANG </h1>")
// })

// app.get("/messages", (req, res) => {
//     db.query("SELECT * FROM messages", (err, result) => {
//         if(err) {
//             throw err;
//         }
//         else {
//             res.send(result)
//         }
//     })
// })

// app.listen(5069, () => { console.log("SERVER STARTED NEGGA") })

// const { EventEmitter } = require("events")
// const eventEmitter = new EventEmitter();

// eventEmitter.on("launch", () => {
//     console.log("HELLO GIATAY")
// })

// eventEmitter.on("drink", () => {
//     console.log("REDEHYDRATE OY NEGGA")
// })

// eventEmitter.emit("launch")
// eventEmitter.emit("launch")
// eventEmitter.emit("drink");

// const { readFile, readFileSync } = require('fs')
// const txt = readFileSync('./hellogiatay.txt', 'utf-8')
// console.log(txt)
// console.log('AWOKAOWKOAWKO')

// readFile('./hellogiatay.txt', 'utf-8', (err, txt) => {
//     console.log(txt)
// })

// console.log('AWOKAOWKOAWKO')
// const path = require('path');
// const os = require('os')

// console.log( "total memory " + os.totalmem)
// console.log( "free memory " + os.freemem)

// const file = require('fs')

// console.log(file.readdirSync('./'))

// file.readdir('.../', (error, files) => {
//     if(error) {
//         console.log("BOANG KA HAHA", error)
//     }
//     else {
//         console.log(files)
//     }
// })



// emitter.on('eat', (arg) => {
//     console.log(arg.food)
// })

// emitter.emit('eat', { food: 'bread' })

// const Sender = require('./sender')
// const sender = new Sender()

// sender.on('drink', (arg) => {
//     console.log(arg.status)
// })

// sender.send('joren')
// console.log(Sender)

// const http = require('http')
// const server = new http.createServer( (req, res) => {
    
//     if(req.url === '/users') {

//         const mysql = require('mysql')
//         const db = mysql.createConnection( {
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'nodejsdb'
//         })

//         db.query('SELECT * FROM messages', (err, result) => {
//             if(err) {
//                 console.log("ERROR")
//                 throw err
//             }
//             else {
//                 console.log(result)
//                 res.write(JSON.stringify(result))
//                 res.end()
//             }
//         })

//     }
//     if(req.url === '/giatay') {
//         res.write('<h1> HELLO GIATAY </h1>')
//         res.end()
//     }
// })

// server.on('connection', (socket) => {
//     console.log('connected na bai,,,')
// })

// server.listen('5069')
