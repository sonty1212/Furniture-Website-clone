import React from 'react';
import "./furni.css"
import user from './user.png'
import cart from './cart.png'
import couch from './couch.png'
import dots_light from './dots-light.png'
import product_1 from './product-1.png'
import product_2 from "./product-2.png"
import product_3 from "./product-3.png"
import truck from './truck.png'
import bag from './bag.png'
import support from './support.png'
import return1 from './return_icon.png'
import sofa_lamp from './sofa_with_lamp.jpg'
import yellow from './dots-yellow.png'
import grid1 from './grid1.jpg'
import grid2 from './grid2.jpg'
import grid3 from './grid3.jpg'


const Furni = () => {
    return (
        <div className='furni col-md-12'>
            <div className='main col-md-12'>
                <div className='nav '>
                    <div className='w-50' id='nav1'>
                        <h1>Furni.</h1>
                    </div>
                    <div className='d-flex justify-content-center w-50' id='nav2'>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                        <div className='nav3 d-flex '>
                            <img src={user} alt='' />
                            <img src={cart} alt='' />
                        </div>
                    </div>
                </div>
                <div className='body1 d-flex display-content-left'>
                    <div className='text w-50   '>
                        <h1>Modern Interior<br />Design Studio</h1>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br />
                            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <div className='btn1 d-flex '>
                            <button class="shop-now">Shop Now</button>
                            <button class="explore">Explore</button>
                        </div>

                    </div>
                    <div className='image'>

                        <img id='couch' src={couch} alt='' />
                        <img id='dots-light' src={dots_light} alt='' />

                    </div>

                </div>

            </div>
            <div className='main2 col-md-12 d-flex'>
                <div className='Row d-flex'>
                    <div className='craft col-md-12 '>
                        <h1>Crafted with<br />excellent material.</h1>
                        <p>Donec vitae odio quis nisl dapibus malesuada.<br /> Nullam ac aliquet velit.
                            Aliquam vulputate velit<br /> imperdiet dolor tempor tristique.</p>
                        <button class="explore2">Explore</button>

                    </div>
                    <div className='item1'>
                        <img src={product_1} alt='' />
                        <h3>Nordic Chair</h3>
                        <h4>$50.00</h4>
                    </div>
                    <div className='item2'>
                        <img src={product_2} alt='' />
                        <h3>Kruzo Aero Chair</h3>
                        <h4>$78.00</h4>

                    </div>
                    <div className='item3'>
                        <img src={product_3} alt='' />
                        <h3>Ergonomic Chair</h3>
                        <h4>$43.00</h4>

                    </div>

                </div>
            </div>
            <div className='main3 col-md-12'>
                <div className='box d-flex'>
                    <div className='box1 w-50'>
                        <h1>Why Choose Us</h1>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            Aliquam vulputate velit <br /> imperdiet dolor tempor tristique.</p>
                        <div className='box11 d-flex'>
                            <div className='truck'>
                                <img src={truck} alt='' />
                                <h6>Fast & Free Shipping</h6>
                                <p>Donec vitae odio quis nisl dapibus malesuada.<br /> Nullam ac aliquet velit. Aliquam vulputate.</p>

                            </div>
                            <div className='bag'>
                                <img src={bag} alt='' />
                                <h6>Easy to Shop</h6>
                                <p>Donec vitae odio quis nisl dapibus malesuada.<br /> Nullam ac aliquet velit. Aliquam vulputate.</p>

                            </div>
                        </div>
                        <div className='box12 d-flex'>
                            <div className='support'>
                                <img src={support} alt='' />
                                <h6>24/7 Support</h6>
                                <p>Donec vitae odio quis nisl dapibus malesuada.<br /> Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                            <div className='return'>
                                <img src={return1} alt='' />
                                <h6>Hassle Free Returns</h6>
                                <p>Donec vitae odio quis nisl dapibus malesuada.<br /> Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>

                        </div>

                    </div>
                    <div className='box2 w-50'>
                        <img id='yellow' src={yellow} alt=''/>
                        <img id='sofa_lamp' src={sofa_lamp} alt=''/>
                        

                    </div>
                </div>

            </div>
            <div className='we-help '>
                <div className='container d-flex'>
                    <div className='row justify-content-between d-flex'>
                        <div className='col-lg-7 mb-5 mb-lg-0 d-flex'>
                            
                            <div className='imgs-grid'>
                                
                                <div className='grid grid-1'>
                                    
                                    <img src={grid1} alt="" />
                                </div>
                                <div className='grid grid-2'>
                                    <img src={grid2} alt="" />
                                </div>
                                <div className='grid grid-3'>
                                    <img src={grid3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 ps-lg-5 bot '>
                            <h2 className='section-title mb-4'>
                                We Help You Make Modern Interior Design
                            </h2>
                            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                            <ul className='list-styled custom-list my-4'>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                            </ul>
                            <p>
                                <a href="#" className='btn'>Explore</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='popular-product'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-12 col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='product-item-sm d-flex'>
                                <div className='thumbnail'>
                                    <img src={product_1} alt="" />
                                </div>
                                <div className='pt-3'>
                                    <h3>Nordic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='col-12 col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='product-item-sm d-flex'>
                                <div className='thumbnail'>

                                    <img src={product_2} alt="" />
                                </div>
                                <div className='pt-3'>
                                    <h3>Kruzo Aero Chairr</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='product-item-sm d-flex'>
                                <div className='thumbnail'>

                                    <img src={product_3} alt="" />
                                </div>
                                <div className='pt-3'>
                                    <h3>Ergonomic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Furni