import { createContext, ReactNode, useContext, useState } from "react";
import { ITarefa } from "../types/tarefa";

interface TarefasContextType {
    tarefas: ITarefa[];
    selecionaTarefa: (tarefa: ITarefa) => void
    finalizarTarefa: (() => void)
    adicionarTarefa: (tarefa: ITarefa) => void
    selecionado: ITarefa | undefined;
}

const TarefasContext = createContext<TarefasContextType | undefined>(undefined)
function TarefasProvider({ children }: { children: ReactNode }) {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function selecionaTarefa(tarefaSelecionada: ITarefa) {
        setSelecionado(tarefaSelecionada)
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({ ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false })))
    }

    function finalizarTarefa() {
        if (selecionado) {
            setSelecionado(undefined);
            setTarefas(tarefasAnteriores =>
                tarefasAnteriores.map(tarefa => {
                    if (tarefa.id === selecionado.id) {
                        return {
                            ...tarefa,
                            selecionado: false,
                            completado: true
                        }
                    }
                    return tarefa
                })
            )
        }
    }

    function adicionarTarefa(tarefa: ITarefa) {
        setTarefas(
            tarefasAntigas =>
                [
                    ...tarefasAntigas,
                    {
                        ...tarefa
                    }
                ]
        )
    }

    return (
        <TarefasContext.Provider value={{ tarefas, selecionaTarefa, finalizarTarefa, adicionarTarefa, selecionado }}>
            {children}
        </TarefasContext.Provider>
    );
}

export default TarefasProvider;

export const useTarefas = () => {
    const context = useContext(TarefasContext);
    if (!context) throw new Error("useTarefas deve ser usado dentro de um TarefasProvider");
    return context;
};