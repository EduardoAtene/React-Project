import { ReactNode, createContext, useEffect, useState } from "react";

interface PropsHistoryOperation {
    id: number;
    nomeOperacao: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface HistoryContextType{
    historico: PropsHistoryOperation[];
}

interface HistoryProviderProps{
    children: ReactNode;
}
export const HistoryContext = createContext({} as HistoryContextType);

export function HistoryProvider( {children}: HistoryProviderProps){

    const [historico,setHistoryOperation] = useState<PropsHistoryOperation[]>([]);

    async function loadHistory() {
        const response = await fetch('http://localhost:3333/historico');
        const data = await response.json();

        setHistoryOperation(data);

    }
    useEffect(() => {
        loadHistory();
    } ,[])

    return(
        <HistoryContext.Provider value={ { historico} } >
            {children}
        </HistoryContext.Provider>
    );
}