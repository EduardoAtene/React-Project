import { Route, Routes } from "react-router-dom"; 
import { DefaultLayout } from "./layout/DefaultLayout";
import { HistoryOperation } from "./pages/HistoryOperation";

export function Router (){

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="" element={<HistoryOperation/>}></Route>
            </Route>
        </Routes>

    );
}