import { Contexto } from './context';
import Complejo from './pages/complejo';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Search from './pages/search';

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
      </Routes>    
    </Contexto>
  );
}

export default App;



