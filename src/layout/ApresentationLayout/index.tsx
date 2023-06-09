import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { HistoryProvider } from "../../contexts/HistoryContext";


export function ApresentationLayout(){
    return (
        <>
            <HistoryProvider >
                <Header/>
                <Outlet/>
            </HistoryProvider>
            
        </>

    );
}