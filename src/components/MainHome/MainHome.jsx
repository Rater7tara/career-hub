import React from 'react';
import Header from '../Header/Header';
import { Outlet } from "react-router-dom";
// import Category from './components/Category/Category';
// import Feature from './components/Feature/Feature';
// import Footer from './components/Footer/Footer';

const MainHome = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            {/* <Category></Category>
            <Feature></Feature>
            <Footer></Footer> */}
        </div>
    );
};

export default MainHome;