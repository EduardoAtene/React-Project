import { Route, Routes } from "react-router-dom"; 
import { Home } from "./pages/Home";
import { ApresentationLayout } from "./layout/ApresentationLayout";
import { ComoReceber} from "./pages/ComoReceber/index";
import { EntreEmContato } from "./pages/EntreEmContato/index";
import { ComoDoar } from "./pages/ComoDoar/index";
import { QuemSomos } from "./pages/QuemSomos";
import { Anuncios } from "./pages/Anuncio";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Login } from "./pages/Login";
import { Registrar } from "./pages/Registrar";

export function Router (){

    return (
        <Routes>
            {/* <Route path="/auth/" element={<DefaultLayout/>}> */}
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/registrar" element={<Registrar/>}></Route>
            {/* </Route> */}
            
           <Route path="/" element={<ApresentationLayout/>}>
                <Route path="" element={<Home />}></Route>
                <Route path="/comodoar" element={<ComoDoar />}></Route>
                <Route path="/contato" element={<EntreEmContato />}></Route>
                <Route path="/receber" element={<ComoReceber />}></Route>
                <Route path="/quemsomos" element={<QuemSomos />}></Route>
                <Route path="/anuncios" element={<Anuncios />}></Route>
            </Route>
            

        </Routes>

    );
}