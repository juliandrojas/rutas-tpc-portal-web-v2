import { Route, Routes } from 'react-router-dom';
import './App.css';
import Company from './pages/Company';
import Home from './pages/Home';
import Login from './pages/Login';
import RoutesPage from './pages/RoutesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/company/*' element={<Company /> } />
        <Route path='/routes/*' element={<RoutesPage /> } />
      </Routes>
    </div>
  );
}

export default App;
