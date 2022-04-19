   
const mysql = require('mysql')


const con = mysql.createConnection({
    user: 'root',
    port: 3306, 
    database: 'myapi'
})


module.exports = {
    async nada(){
        console.log('nadairmao')
    }
}