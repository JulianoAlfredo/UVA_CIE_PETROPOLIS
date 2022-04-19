import React, {useState} from "react";
import './signUp.css'
import API from "../../api/api";

export default function SignUp(){

    const [name, setName] = useState(String)
    const [age, setAge] = useState(Number)
    const [situation, setSituation] = useState(String)
    const [password, setPassword] = useState(String)
    function cadastrarUsuario(name:String, age:Number, situation:String, password:String){
        API.post('/cadastrarUsuario', {
            nome: name, 
            idade: age, 
            situacao: situation, 
            senha: password
        }).then(res =>{console.log(res)})
    }
    return(
        <div className="div-main-signup">
            <div className="bg"></div>
            <p>Cadastro</p>
            <div className='signUp-modal'>
                <input onChange={(event) => {setName(event.target.value)}} type="text" placeholder="Digite seu nome completo" />
                    <div className='signUp-modal-userSituation'>
                        <div className='signUp-modal-user'>
                            <p>Sua situação</p>
                            <input  onChange={(event) => {setSituation(event.target.value)}} placeholder="digite"/>
                        </div>

                        <div className='signUp-modal-user'>
                            <p>Sua idade</p>
                            <input onChange={(event) => {setAge(Number(event.target.value))}} placeholder="digite"/>
                        </div>
                    </div>  
                <input  onChange={(event) => {setPassword(event.target.value)}} type='password' placeholder="Digite sua senha" />
                <button onClick={() =>{cadastrarUsuario(name, age, situation, password)}}>Realizar cadastro</button>
                
            </div>
        </div>
    )
}