import React from 'react';
import Header from '../user/components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/container/Home/Home';
import Shop from '../user/container/Shop/Shop';
import Cart from '../user/container/Cart/Cart';
import Checkout from '../user/container/Checkout/Checkout';
import Testimonial from '../user/container/Testimonial/Testimonial';
import Page from '../user/container/Page/Page';
import Contact from '../user/container/Contact/Contact';
import Footer from '../user/components/Footer/Footer';
import Shpe_Detail from '../user/container/Shop_detail/Shpe_Detail';


function UserRoutes(props){
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Shop' element={<Shop />} />
                <Route exact path="/Shop/:id" element={<Shpe_Detail />} />
                <Route exact path="/Cart" element={<Cart />} />
                <Route exact path="/Checkout" element={<Checkout />} />
                <Route exact path="/Testimonial" element={<Testimonial />} />
                <Route exact path="/Page" element={<Page />} />
                <Route exact path="/Contact" element={<Contact />} />
            </Routes>
            <Footer/>

        </>
    );
}

export default UserRoutes;