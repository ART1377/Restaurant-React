import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Reservation from './pages/Reservation';
import ShoppingCart from './pages/ShoppingCart';
import CommonQuestion from './pages/CommonQuestion';

const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path='/homePage' element={<Homepage />} />
    <Route path='/aboutUs' element={<AboutUs />} />
    <Route path='/contactUs' element={<ContactUs />} />
    <Route path='/register' element={<Register />}>
      <Route path=':state' element={<Register />} />
    </Route>
    <Route path='/reservation' element={<Reservation />} />
    <Route path='/shoppingCart' element={<ShoppingCart />} />
    <Route path='/commonQuestion' element={<CommonQuestion />} />
  </Route>
));

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
