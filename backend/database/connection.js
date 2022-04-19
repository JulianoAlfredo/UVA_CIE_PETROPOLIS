   
const mysql = require('mysql')


const con = mysql.createConnection({
    user: 'root',
    port: 3306, 
    database: 'resgatropolis'
})


module.exports = {
    async login_user(reqJu, resJu) {
        const user = reqJu.body
        con.query(`SELECT * FROM users WHERE name="${user.usuario}"`, function(a, b,c ){
            
            if(b[0].password === user.senha){
                resJu.send("LOGADO")
            }
        })
    },
    async create_user(reqJu, resJu){
        const user = reqJu.body

        con.query(`INSERT INTO users(name, situation, age, password) VALUES("${user.nome}", "${user.situacao}", ${user.idade},"${user.senha}" )`, function(a, b, c){
            console.log(b)
        })
        
    }
}