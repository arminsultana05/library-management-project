
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';





function App() {
  return (
    <div>
     <Header></Header>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       
     </Routes>

   
    </div>
  );
}

export default App;
