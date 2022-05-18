import React from 'react';
import MapPage from './map/map';
import "./alojamento.css"
import Arrow from '../../img/arrow.svg'


export default function AlojamentosPage(){
    return(
        <div className="alojamento-div-content">
            <div className="bgAlojamento" ></div>
            <div className="div-fix">
                
            </div>
            <div className="map-alojamento">
                <div className="map-alojamento-utility">
                    <button onClick={() => { window.location.href = "https://uva-cie-petropolis.vercel.app/"}} className='back-main'>Voltar</button>
                    <p>Alojamentos disponíveis</p>
                    <button className="sac">SAC</button>
                </div>
                
                <MapPage />
            </div>
        </div>
        
    )
}