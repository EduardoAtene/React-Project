import { useMemo } from "react";
import { HistoryContext } from "../contexts/HistoryContext";
import { useContextSelector } from "use-context-selector";

export function useSummary(){
    const historico = useContextSelector(HistoryContext, (v) =>{
        return v.historico;
    });

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

    // const summary = useMemo( () => {
    //         historico.reduce( 
    //             (acc, historic) =>  {
    //                 if(historic.type == "income"){
    //                     acc.income += historic.price;
    //                     acc.total += historic.price;
    //                 }else if(historic.type == "outcome"){
    //                     acc.outcome += historic.price;
    //                     acc.total -= historic.price;
    //                 }
    //                 return acc;
    //             },
    //             {
    //                 income:0,
    //                 outcome:0,
    //                 total:0
    //             });
    //     }, [historico]);

    return summary;

}
