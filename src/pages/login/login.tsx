import React from 'react';
import './login.css'


export default function LoginPage(){
    return(
        <div className='main-div'>
            <div className='bgLogin'></div>
            <p>Seja bem vindo</p>
            <div className='login-modal'>
                <div className='login-modal-input'>
                    <input placeholder='Digite seu CPF ou Usuário' />
                    <input type='password' placeholder='Digite sua senha ' />
                </div>
                <div className='login-modal-register'>
                    <p>Não tem login?</p> <a href='http://localhost:3000/login'>CADASTRE-SE</a>
                </div>
                <button>Fazer login</button>               
                
            </div>
        </div>
    )
}