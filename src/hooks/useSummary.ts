import { useContext } from "react";
import { HistoryContext } from "../contexts/HistoryContext";

export function useSummary(){
    const {historico} = useContext(HistoryContext);

    const summary = historico.reduce( 
        (acc, historic) =>  {
            if(historic.type == "income"){
                acc.income += historic.price;
                acc.total += historic.price;
            }else if(historic.type == "outcome"){
                acc.outcome += historic.price;
                acc.total -= historic.price;
            }
            return acc;
        },
        {
            income:0,
            outcome:0,
            total:0
        });
        return summary;

}
