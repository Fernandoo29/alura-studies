import { ITarefas } from '../../../types/tarefa';
import style from '../Lista.module.scss'

function Item({ tarefa, tempo, completado, selecionado, id }: ITarefas) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}

export default Item;