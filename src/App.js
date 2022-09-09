
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBooks from './Components/AllRequest/AddBooks/AddBooks';
import AllRequest from './Components/AllRequest/AllRequest';
import GetUsers from './Components/AllRequest/ManageBooks/GetUsers/GetUsers';
import ManageBooks from './Components/AllRequest/ManageBooks/ManageBooks';
import AllBooks from './Components/Banner/AllBooks/AllBooks';
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import MyRequest from './Components/Dashboard/MyRequest';
import Faq from './Components/Faq/Faq';
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
       </RequireAuth>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path='my-request'element={<MyRequest></MyRequest>}></Route>
        <Route path='all-request'element={<AllRequest></AllRequest>}></Route>
        <Route path='manage-books'element={<ManageBooks></ManageBooks>}></Route>
        <Route path='make-admin'element={<GetUsers></GetUsers>}></Route>
        <Route path='add-books'element={<AddBooks></AddBooks>}></Route>
        <Route path='faq'element={<Faq></Faq>}></Route>
        
       </Route>
       <Route path='/student-details' element={
       <RequireAuth>
        <StudentDetails></StudentDetails>
       

       </RequireAuth>
      }></Route>
       
     </Routes>
    

   
    </div>
  );
}

export default App;
