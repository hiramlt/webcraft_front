import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/inicio' element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App
