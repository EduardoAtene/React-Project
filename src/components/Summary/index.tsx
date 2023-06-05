import { ArrowCircleDown,
         ArrowCircleUp,
         CurrencyDollar } from "@phosphor-icons/react";
import { SummaryContainer,
         SummaryCard  } from "./style";
import { priceFormatter } from "../../utility/formatter";
import { useSummary } from "../../hooks/useSummary";



export function Summary(){

    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp
                        size=   {32}
                        color=  "#08b37e"
                    />
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>
            
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown
                        size=   {32}
                        color=  "#F75A68"
                    />
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>
            
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar
                        size=   {32}
                        color=  "#FFFFFF"
                    />
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>

    )
}