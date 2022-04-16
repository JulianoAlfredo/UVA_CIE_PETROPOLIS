import React from "react";
import './signUp.css'

export default function SignUp(){
    return(
        <div className="div-main-signup">
            <div className="bg"></div>
            <p>Cadastro</p>
            <div className='signUp-modal'>
                <input type="text" placeholder="Digite seu nome completo" />
                    <div className='signUp-modal-userSituation'>
                        <div className='signUp-modal-user'>
                            <p>Sua situação</p>
                            <input placeholder="digite"/>
                        </div>

                        <div className='signUp-modal-user'>
                            <p>Sua idade</p>
                            <input placeholder="digite"/>
                        </div>
                    </div>  
                <input type='password' placeholder="Digite sua senha" />
                <button>Realizar cadastro</button>
                
            </div>
        </div>
    )
}