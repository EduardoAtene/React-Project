import { Route, Routes } from "react-router-dom"; 
import { DefaultLayout } from "./layout/DefaultLayout";
import { HistoryOperation } from "./pages/HistoryOperation";
import { Home } from "./pages/Home";
import { ApresentationLayout } from "./layout/ApresentationLayout";

export function Router (){

    return (
        <Routes>
            {/* <Route path="/" element={<DefaultLayout/>}> */}
                {/* <Route path="" element={<HistoryOperation/>}></Route> */}
            {/* </Route> */}
            
           <Route path="/" element={<ApresentationLayout/>}>
                <Route path="" element={<Home/>}></Route>
            </Route>

        </Routes>

    );
}