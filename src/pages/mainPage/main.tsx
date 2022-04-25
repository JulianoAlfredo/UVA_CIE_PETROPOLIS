import React, {useEffect, useState} from 'react';
import './mainPage.css'

export default function MainPage(){
    const [usuario, setUsuario] = useState(String)
    useEffect(() =>{
        var nome = String(localStorage.getItem("user_info"))
        setUsuario(nome)
        console.log(nome)
    }, []
    )

    return(
        <div className="maingPageDiv">
            <div className='bgMain'></div>

            <div className='content-main'>
                <div className='header-main'>
                    <p>Olá, {usuario}</p>
                    <button onClick={() => { window.location.href = "http://localhost:3000/noticias"}} className='blue'>Notícias</button>
                    <button onClick={() => { window.location.href = "http://localhost:3000/desaparecidos"}} className='orange'>Desaparecidos</button>
                    <button onClick={() => { window.location.href = "http://localhost:3000/alojamentos"}}  className='red'>Alojamentos</button>
                </div>
                <div className='user-situation-main'>
                    <p>Sua situação no momento é de RISCO</p>
                    <p>Em breve estaremos no seu local!</p>
                </div>

                <div className='card-data-main'>
                    
                    <div className='card first'>
                        
                        <p className='card-text-principal'>Vidas Salvas</p>
                        <p className='card-text-data'>125</p>
                    </div>
                    <div className='card second'>
                        <div className='card-fix'>
                            <p className='card-text-principal'>Alojamento concluídos</p>
                            <p className='card-text-data'>34</p>
                        </div>
                        <div className='card-fix'>
                            <p className='card-text-principal'>Estimativa de valores gastos</p>
                            <p className='card-text-data'>R$ 1M.950K</p>
                        </div>
                    </div>
                    <div className='card thirty'>
                        <p className='card-text-principal'>Animais resgatados</p>
                        <p className='card-text-data'>12</p>
                    </div>
                </div>

            </div>
        </div>
    )
}