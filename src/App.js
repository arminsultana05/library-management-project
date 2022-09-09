
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import StudentDetails from './Components/StudentDetails/StudentDetails';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';
import LogIn from './Pages/LogIn/LogIn';
import RequireAuth from './Pages/LogIn/RequireAuth';
import Register from './Pages/Register/Register';





function App() {
  return (
    <div>
     <Header></Header>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/dashboard' element={<RequireAuth>
        <Dashboard></Dashboard>
       </RequireAuth>}></Route>
       <Route path='/student-details' element={
       <RequireAuth>
        <StudentDetails></StudentDetails>
       

       </RequireAuth>
      }></Route>
       
     </Routes>
     <Footer></Footer>

   
    </div>
  );
}

export default App;
