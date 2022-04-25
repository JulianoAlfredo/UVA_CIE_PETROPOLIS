import React from "react";
import './desaparecido.css';
import Arrow from '../../img/arrow.svg'



export default function DesaparecidoPage(){
    const desaparecidosArr = [
        {
            nome: 'Juliano',
            idade: 18,
            bairro: 'Coronel Veiga'
        },
        {
            nome: 'Danilo',
            idade: 21,
            bairro: 'Alto da Serra'
        },
        {
            nome: 'Guilherme',
            idade: 19,
            bairro: 'Castelânia'
        },
    ]
    return(
        <div className='desaparecido-div'>
            <div className='desaparecido-content'>
                <p>Desaparecidos</p>
                <table className='table-desaparecidos'>
                    <tr className='header-table-desaparecidos'>
                        <td>Nome</td>
                        <td>Idade</td>
                        <td>Bairro</td>
                    </tr>
                {desaparecidosArr.map((item) =>
                <tr>
                    <td className='item-desparecido'>{item['nome']}</td>
                    <td className='mid-item-table'>{item['idade']}</td>
                    <td>{item['bairro']}</td>
                    <a href='http://localhost:3000/desaparecidos'><img alt='Arrow' src={Arrow} /></a>
                </tr>
                )}

                    
                </table>
            </div>
        </div>
    )
}