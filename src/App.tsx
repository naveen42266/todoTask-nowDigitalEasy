import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/user/:userid' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
