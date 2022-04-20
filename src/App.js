
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/Layout';
import MainPage from './components/Main/MainPage';
import SingleProduct from './components/SingleProduct/SingleProduct';
import ErrorPage from './components/ErrorPage'




function App() {

  return (
    <>
     <Navbar />
      <Routes>
       <Route path='/' element={<Layout />} />
       <Route index element={<MainPage />} />
       <Route path='/products' element={<Products />}/>
       <Route path='/products/product'>
          <Route path=':productId' element={<SingleProduct />}/>
       </Route>
       <Route path='*' element={<ErrorPage />} />
      </Routes>
     
      
    </>
    );
}

export default App;
