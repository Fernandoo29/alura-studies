import style from './Cronometro.module.scss'

import Botao from '../Botao';
import Relogio from './Relogio';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import { useState } from 'react';

interface CronometroProps {
    selecionado: ITarefa | undefined
}

function Cronometro({ selecionado }: CronometroProps) {
    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    );
}

export default Cronometro;