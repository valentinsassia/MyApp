import { Contexto } from './context';
import Complejo from './pages/complejo/complejo.js';
import Home from './pages/home/home.js';
import NotFound from './pages/notFound/notFound.js';
import Search from './pages/search/search.js';
import ConfirmarReserva from "./pages/confirmar/confirmarReserva.js"
import MiComplejo from './pages/micomplejo/micomplejo';
import Login from './pages/login/login';

// para colocar las rutas.
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Contexto >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:id_location' element={<Search />} />
        <Route path='/:nombre' element={<Complejo />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/:nombre/:horaseleccionada' element={<ConfirmarReserva />} />
        <Route path='/login' element={<Login />} />

        <Route path='/complejo/:nombre' element={<MiComplejo condicion = {"reservas"}/>} />
        <Route path='/complejo/:nombre/estadisticas' element={<MiComplejo condicion = {"estadisticas"}/>} />
        <Route path='/complejo/:nombre/pago' element={<MiComplejo condicion = {"pago"}/>} />
        <Route path='/complejo/:nombre/configuracion' element={<MiComplejo condicion = {"configuracion"}/>} />

      </Routes>    
    </Contexto>
  )
}

export default App;



