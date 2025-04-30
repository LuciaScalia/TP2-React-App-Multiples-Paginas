import { BrowserRouter, Routes, Route } from "react-router-dom"
import ROUTES from './routes/Routes'
import Home from './pages/Home/Home'
import Detalles from './pages/Detalles/Detalles';
import Favoritos from './pages/Favoritos/Favoritos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.detalles} element={<Detalles />} />
        <Route path={ROUTES.favoritos} element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App
