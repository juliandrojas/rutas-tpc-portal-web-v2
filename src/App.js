import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Company from './pages/Company';
import Home from './pages/Home';
import Login from './pages/Login';
import RoutesPage from './pages/RoutesPage';
import { supabase } from './supabase/client';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session) {
        navigate('/login');
      } else {
        navigate('/');
      }
      console.log(event, session);
    })
  }, [navigate])
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route exact path='/login' element={ <Login /> }/>
        <Route exact path='/company/' element={<Company /> } />
        <Route exact path='/routes/' element={<RoutesPage /> } />
      </Routes>
    </div>
  );
}

export default App;
