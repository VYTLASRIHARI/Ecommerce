import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Favourite from './Pages/Favourite';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter title='SignUp'>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='product' element={<OurStore/>}/>
      <Route path='product/:id' element={<SingleProduct/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='blog/:id' element={<SingleBlog/>}/>
      <Route path='Compare-Product' element={<CompareProduct/>}/>
      <Route path='favourite' element={<Favourite/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='forgot-password' element={<ForgotPassword/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='reset-password' element={<ResetPassword/>}/>
      <Route path='privacy' element={<PrivacyPolicy/>}/>
      <Route path='refund' element={<RefundPolicy/>}/>
      <Route path='shipping' element={<ShippingPolicy/>}/>
      <Route path='terms' element={<TermsAndConditions/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
