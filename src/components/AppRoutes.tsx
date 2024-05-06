import { Routes, Route, BrowserRouter as Router, } from "react-router-dom"
import Home from "./Home"
import ClientHome from "../pages/clinet/ClientHome";
import { ClientForm } from "../pages/clinet/ClientForm";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/client" element={<ClientHome/>} />
            <Route path="/client/add" element={<ClientForm />} />
        </Routes>
    )
}

export default AppRoutes;