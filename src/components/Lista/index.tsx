import style from './Lista.module.scss';

import Item from './Item';
import { useTarefas } from '../../contexts/TarefasContext';

function Lista() {
    const { tarefas, selecionaTarefa } = useTarefas();
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((item) => (
                        <Item
                            key = {item.id}
                            {...item}
                            selecionaTarefa = {selecionaTarefa}
                        />
                    ))
                }
            </ul>
        </aside>
    );
}

export default Lista;