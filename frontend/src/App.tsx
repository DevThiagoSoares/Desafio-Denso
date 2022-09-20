import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Politicas from './pages/Politcas';
import Relatorio from './pages/Relatorio';
import Upload from './pages/Upload';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/upload' element={<Upload />}>
        </Route>
        <Route path='/relatorio' element={<Relatorio />}>
        </Route>
        <Route path='/politicas' element={<Politicas />}>
        </Route>
      </Routes> 
    </Router>
  );
}

export default App;