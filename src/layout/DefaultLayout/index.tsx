import { Outlet } from "react-router-dom";
import { HeaderButton } from "../../components/HeaderButton";
import { Summary } from "../../components/Summary";
import { HistoryProvider } from "../../contexts/HistoryContext";


export function DefaultLayout(){
    return (
        <>
            <HistoryProvider >
                <HeaderButton/>
                <Summary/>
                <Outlet/>
            </HistoryProvider>
            
        </>

    );
}