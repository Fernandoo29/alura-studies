import style from './Botao.module.scss'

import React from 'react';

class Botao extends React.Component{
    render(){
        return(
            <button className={style.botao}>
                <span>Botão</span>
            </button>
        )
    }
}

export default Botao;