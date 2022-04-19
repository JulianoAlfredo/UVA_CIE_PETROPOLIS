const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001


app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/')
 

app.listen(port, () =>{
        console.info(`Aplicação rodando na porta ${port}!`)
});
console.log("Servidor escutando na porta "+ port +"...")