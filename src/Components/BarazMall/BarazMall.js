import React from 'react';
import './BarazMall.css';

import d1 from '../../images/d1.jpg';
import f3 from '../../images/f3.jpg';
import d3 from '../../images/d3.jpg';
import d4 from '../../images/d4.jpg';
import d5 from '../../images/d5.jpg';
import d6 from '../../images/d6.jpg';

const BarazMall = () => {
    return (
        <div className='bg-brand'>
        <div className='container'>
            <h2>BARAZ MALL</h2>
            <div className='d-flex flex-wrap flassale-container'>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={d1} className='img-fluid i-logo' alt='flash-sale-product' />
                    <p className='card-title'>Buds Air Wirless Bluetooth Headsets in Ear...</p>
                    <h3 className='card-price'>৳400</h3>
                    <h4 className='card-text'><strike>৳600</strike> 33%</h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={f3} className='img-fluid i-logo' alt='flash-sale-product' />
                    <p className='card-title'>Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                    <h3 className='card-price'>৳135</h3>
                    <h4 className='card-text'><strike>৳200</strike> 33%</h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={d3} className='img-fluid i-logo' alt='flash-sale-product' />
                    <p className='card-title'>TWS i7s Double Dual Mini Earphone With Power cas...</p>
                    <h3 className='card-price'>৳248</h3>
                    <h4 className='card-text'><strike>৳700</strike> 65%</h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={d4} className='img-fluid i-logo' alt='flash-sale-product' />
                    <p className='card-title'>Vivo in Ear Earphone Best Sound Quality for any...</p>
                    <h3 className='card-price'>৳131</h3>
                    <h4 className='card-text'><strike>৳200</strike> 35%</h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={d5} className='img-fluid i-logo' alt='flash-sale-product' />
                    <p className='card-title'>01 Pcs Anti Rfid Card Holder NFC Blocking...</p>
                    <h3 className='card-price'>৳26</h3>
                    <h4 className='card-text'><strike>৳66</strike> 35%</h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={d6} className='img-fluid i-logo' alt='flash-sale-product' />
                    <p className='card-title'>Electric Hot Water Bag Pain Remover[Multicolor]</p>
                    <h3 className='card-price'>৳163</h3>
                    <h4 className='card-text'><strike>৳650</strike> 70%</h4>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BarazMall;