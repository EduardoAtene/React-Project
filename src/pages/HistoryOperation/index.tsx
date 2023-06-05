import { SearchForm } from "./components/SearchForm"
import { HistoryContainer, HistoryTable, PriceHighlight } from "./style"
import { HistoryContext } from "../../contexts/HistoryContext";
import { dateFormatter, priceFormatter } from "../../utility/formatter";
import { useContextSelector } from "use-context-selector";


export function HistoryOperation(){

    const historico = useContextSelector(HistoryContext, (v) => {
        return v.historico;
    });
    return (
        <HistoryContainer>
            <SearchForm></SearchForm>
            <HistoryTable>
                <tbody>
                    { historico.map( history => {
                        return (
                            <tr key={history.id}>
                                <td width='40%'>{history.description}</td>
                                <td >
                                    <PriceHighlight variant={history.type}>
                                        {history.type == "outcome" && "- "}
                                         { priceFormatter.format(history.price)}
                                    </PriceHighlight>
                                </td>
                                <td > {history.category} </td>
                                <td > {dateFormatter.format(new Date(history.createdAt) )} </td>
                        </tr>
                        );
                    })}
                </tbody>
            </HistoryTable>
        </HistoryContainer>
    );
}