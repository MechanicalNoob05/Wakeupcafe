import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authentication_page/Login';
import Page from './components/main_page/page';
import Home_page from './components/pages/Home/Home_page';

import Drinks from './components/pages/Drinks/Drinks'
import Extra from './components/pages/extras/Extra'
import Checkout from './components/pages/Checkout/Checkout'
import Menu from './components/pages/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='home' element={<Page/>}>
          <Route path='home_page' element={<Home_page></Home_page>}/>
          <Route path='menu' element={<Menu/>}>  
            <Route path='drinks' element={<Drinks></Drinks>}/>
            <Route path='extras' element={<Extra></Extra>}/>
          </Route>
          <Route path='checkout' element={<Checkout></Checkout>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
