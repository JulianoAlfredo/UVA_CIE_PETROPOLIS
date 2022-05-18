import React, {useState} from 'react';
import API from '../../api/api';
import './login.css'

export default function LoginPage(){
    const [user, setUser] = useState(String)
    const [password, setPassword] = useState(String)
    function loginUser(user:String, passowrd:String){
        API.post('/loginUsuario', {
            usuario: user,
            senha: password
        }).then(async res => {
            if(res.status === 200){
                localStorage.setItem("user_info", res.data)
                window.location.href = "https://uva-cie-petropolis.vercel.app/"
            }
        })
    }
    return(
        <div className='main-div'>
            <div className='bgLogin'></div>
            <p>Seja bem vindo</p>
            <div className='login-modal'>
                <div className='login-modal-input'>
                    <input onChange={(ev) =>{setUser(ev.target.value)}} placeholder='Digite seu CPF ou Usuário' />
                    <input onChange={(ev) =>{setPassword(ev.target.value)}}  type='password' placeholder='Digite sua senha ' />
                </div>
                <div className='login-modal-register'>
                    <p>Não tem login?</p> <a href='https://uva-cie-petropolis.vercel.app/cadastrar'>CADASTRE-SE</a>
                </div>
                <button className="login-btn" onClick={() =>{loginUser(user, password)}}>Fazer login</button>               
                
            </div>
        </div>
    )
}