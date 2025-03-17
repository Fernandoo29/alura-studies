import style from './Botao.module.scss'

// import React from 'react';
import React, { ReactNode } from "react";

type Props = {
    children?: ReactNode
    type?: "button" | "submit" | "reset" | undefined
};

class Botao extends React.Component<Props> {
    render() {
        const {type = 'button'} = this.props;
        return (
            <button type={type} className={style.botao}>
                <span>{this.props.children}</span>
            </button>
        )
    }
}

export default Botao;