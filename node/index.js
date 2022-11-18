const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')

app.get('/', (req, res) => {

    //show records of people table
    const sql = `SELECT name FROM people;`
    connection = mysql.createConnection(config)
    connection.query(sql, (error, results, fields) => {
        if (error) throw error
        const data = results.map((result) => {
            return `<p>Name: ${result.name}</p>`
        }).join('')
        res.send(`<h1>Names List</h1> ${data}`)
        connection.end()
    })
})

app.listen(port, () => {
    const connection = mysql.createConnection(config)
    let name = `Ricardo-${Math.floor(Math.random() * 10000)}`;
    const sql = `INSERT INTO people(name) values('${name}');`
    connection.query(sql)
    connection.end()

    console.log(`Rodando na URL http://localhost:${port}`)
})