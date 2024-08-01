import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import Group from './pages/group';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/user/:userid' element={<User />} />
        <Route path='/user/:userid/:groupid' element={<Group />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
