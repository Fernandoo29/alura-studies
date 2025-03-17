import style from './Botao.module.scss'

// import React from 'react';
import React, { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

class Botao extends React.Component<Props> {
    render() {
        return (
            <button className={style.botao}>
                <span>{this.props.children}</span>
            </button>
        )
    }
}

export default Botao;