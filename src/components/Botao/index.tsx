import style from './Botao.module.scss'

// import React from 'react';
import React, { ReactNode } from "react";

type BotaoProps = {
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
};

function Botao({ type, onClick, children }: BotaoProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            <span>{children}</span>
        </button>
    )
}

export default Botao;