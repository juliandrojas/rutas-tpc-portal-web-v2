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
  }, [])
  
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
