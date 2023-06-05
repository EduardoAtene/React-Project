import { useContext } from "react";
import { SearchForm } from "./components/SearchForm"
import { HistoryContainer, HistoryTable, PriceHighlight } from "./style"
import { HistoryContext } from "../../contexts/HistoryContext";
import { dateFormatter, priceFormatter } from "../../utility/formatter";


export function HistoryOperation(){

    const { historico } = useContext(HistoryContext);
    return (
        <HistoryContainer>

            <SearchForm></SearchForm>

            <HistoryTable>
                <tbody>
                    { historico.map( history => {
                        return (
                            <tr key={history.id}>
                                <td width='40%'>{history.nomeOperacao}</td>
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
{/* 
                    <tr>
                        <td width='50%'> Hamburguer</td>
                        <td >
                            <PriceHighlight variant="outcome">
                                - R$ 59,99
                            </PriceHighlight>
                        </td>
                        <td > Alimentação</td>
                        <td > 10/12/2023</td>
                    </tr>
                    <tr>
                        <td width='50%'> Aluguel do apartamento</td>
                        <td >
                            <PriceHighlight variant="outcome">
                                - R$ 1.400,00
                            </PriceHighlight>
                        </td>
                        <td > Casa</td>
                        <td > 09/12/2023</td>
                    </tr> */}
                </tbody>
            </HistoryTable>
        </HistoryContainer>
    );
}