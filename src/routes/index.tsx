import  {Routes, Route, Navigate} from "react-router-dom";
import {Button, ButtonGroup} from "@mui/material";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/pagina-inicial" element = {<Button>Manica</Button>}/>
            <Route path = "/manica" element = {<p>Página MaNICA</p>}/>
            <Route path = "*" element = { <Navigate to = "/pagina-inicial"/>}/>
        </Routes>
    )
};