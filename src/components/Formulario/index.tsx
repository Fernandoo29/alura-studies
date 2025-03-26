// import './style.scss'
import style from './Formulario.module.scss';

import React, { useState } from 'react'
import Botao from '../Botao'
import { v4 as uuidv4 } from 'uuid';
import { useTarefas } from '../../contexts/TarefasContext';

function Formulario() {
    const { adicionarTarefa } = useTarefas();
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        adicionarTarefa({
            tarefa,
            tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
        });
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <label
                    htmlFor="tarefa"
                >
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    placeholder='O que você quer estudar?'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label
                    htmlFor="tempo"
                >
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name='tempo'
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    );
}

export default Formulario;