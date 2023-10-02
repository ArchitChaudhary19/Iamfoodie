import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
