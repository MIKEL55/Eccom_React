import {Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './layout/Home'
import YourCart from './layout/YourCart';
import ProductPage from './layout/ProductPage';
import  Login from './layout/Login';
import Signup from './layout/Signup';
import ProductBrowse from './layout/ProductBrowse'
import AdminDashBoard from './layout/AdminDashboard';
import CheckoutSuccess from './layout/CheckoutSuccess'
import AdminProductImport from './layout/AdminProductImport';
import RequireAuth from './components/RequireAuth';
import MissingRoute from './components/MissingRoute';
import SignupSuccess from './layout/SignupSuccess';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage/>} />
      <Route path="/usercart" element={<YourCart/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signupsuccess" element={<SignupSuccess/>}/>
      <Route path="/category/:cat" element={<ProductBrowse/>}/>
      <Route path="/admin" element={<AdminDashBoard/>}/>
      <Route path="/admin/category" element={<AdminProductImport/>}/>

    {/* ---Private Routes Require Authentication---*/}
      <Route element={<RequireAuth/>}>
        <Route path="/checkoutsuccess" element={<CheckoutSuccess/>}/>
      </Route>
    {/*---Private Routes Require Authentication---*/}

    {/*---Missing Route Redirect---*/}
    <Route path='*' element={<MissingRoute/>}/>
    {/*---Missing Route Redirect---*/}

    </Routes>
  );
}

export default App;
