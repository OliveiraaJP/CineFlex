import { BrowserRouter,Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import MainPage from "./components/MainPage"
import MoviePage from "./components/MoviePage"
import SessionPage from "./components/SessionPage"
import SucessPage from "./components/SucessPage"



export default function App(){
    return(
        <>
        <Header />

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/filme/:idMovie" element={<MoviePage />}/>
                <Route path="/sessao/:idSession" element={<SessionPage />} />
                <Route path="/sucesso" element={<SucessPage />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}