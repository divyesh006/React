//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
//import Header from './components/Header';


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path = '/login' Component={Login}/>
        <Route path = '/register' Component={Register}/>
        <Route path = '/productlist' Component={ProductList}/>
        <Route path = '/' Component={Login}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
