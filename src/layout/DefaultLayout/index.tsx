import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { HistoryProvider } from "../../contexts/HistoryContext";


export function DefaultLayout(){
    return (
        <>
            <HistoryProvider >
                <Header/>
                <Summary/>
                <Outlet/>
            </HistoryProvider>
            
        </>

    );
}