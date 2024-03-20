import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../admin/container/Products/Products';
import Layout from '../admin/components/Layout/Layout';
import Review from '../admin/container/Review/Review';

function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/Review' element={<Review />}/>
            </Routes>
        </Layout>

    );
}

export default AdminRoutes;