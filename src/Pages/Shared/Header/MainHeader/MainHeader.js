import React from 'react';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader/MobileHeader';
import './MainHeader.css'
const MainHeader = () => {
    return (
        <div>
             <div className="hidedesMenu">
            <Header></Header>
            </div>
            <div className="hideMobileMenu">
            <MobileHeader></MobileHeader>
            </div>
        </div>
    );
};

export default MainHeader;