import React from 'react';
import './TopBanner.css';

import feature1 from '../../images/feature1.png';
import feature2 from '../../images/feature2.png';
import feature3 from '../../images/feature3.png';
import feature4 from '../../images/feature4.png';

const TopBanner = () => {
    return (
        <div className='bg-brand'>
            <div className='container'>
                <img src={''} alt='' />

                <div className='row'>
                    <div style={{borderRadius: '50px'}} className='col m-2 bg-white real-hero'>
                        <img src={feature1} width='50' className='img-fluid py-1' alt='' />
                        <a href='/' className='text-decoration-none text-dark fw-bold ps-2'>Free Shipping</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className='col m-2 bg-white real-hero'>
                        <img src={feature2} width='50' className='img-fluid py-1' alt='' />
                        <a href='/' className='text-decoration-none text-dark fw-bold ps-2'>Grocery Shopping</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className='col m-2 bg-white real-hero'>
                        <img src={feature3} width='50' className='img-fluid py-1' alt='' />
                        <a href='/' className='text-decoration-none text-dark fw-bold ps-2'>Baraz Mail</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className='col m-2 bg-white real-hero'>
                        <img src={feature4} width='50' className='img-fluid py-1' alt='' />
                        <a href='/' className='text-decoration-none text-dark fw-bold ps-2'>Digital Sheba</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;