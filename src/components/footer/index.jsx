import React, { useEffect, useState } from 'react';
import icon1 from '../../assets/imgs/Vector-1.png';
import icon2 from '../../assets/imgs/Vector-2.png';
import icon3 from '../../assets/imgs/instagram.png';
import icon4 from '../../assets/imgs/Vector-4.png';
import icon5 from '../../assets/imgs/Vector.png';
import useWindowDimensions from 'use-window-dimensions';

const Footer = () => {
    const { width } = useWindowDimensions();
    const [mobile, setMobile] = useState(false);


    useEffect(() => {
        if (width <= 768) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    })

    return (
        <footer>
            <div className={`${mobile ? 'text-center' : 'flex justify-content-between align-items-center px-8 mb-5'}`}>
                <div className={`${mobile && 'mt-7'}`}>
                    <p className='font-bold text-lg'>Categories</p>
                    <p>User Intetrface</p>
                    <p>User Experience</p>
                    <p>Digital Media</p>
                    <p>Lifestyle</p>
                    <p>Programming</p>
                    <p>Animation</p>
                </div>
                <div className={`${mobile && 'mt-7'}`}>
                    <p className='font-bold text-lg'>Product</p>
                    <p>Pricing</p>
                    <p>Overview</p>
                    <p>Browse</p>
                    <p>Accessibility</p>
                    <p>Five</p>
                    <p>Changelog</p>
                </div>
                <div className={`${mobile && 'mt-7'}`}>
                    <p className='font-bold text-lg'>Solutions</p>
                    <p>Brainstorming</p>
                    <p>Ideation</p>
                    <p>Wireframing</p>
                    <p>Research</p>
                    <p>Design</p>
                    <p>Concept</p>
                </div>
                <div className={`${mobile && 'mt-7'}`}>
                    <p className='font-bold text-lg'>Resources</p>
                    <p>Help Center</p>
                    <p>Blog</p>
                    <p>Tutorials</p>
                    <p>FAQs</p>
                    <p>Community</p>
                    <p>Events</p>
                </div>
                <div className={`${mobile && 'mt-7'}`}>
                    <p className='font-bold text-lg'>Support</p>
                    <p>Contact Us</p>
                    <p>Developers</p>
                    <p>Documentation</p>
                    <p>Integrations</p>
                    <p>Reports</p>
                    <p>Webinar</p>
                </div>
                <div className={`${mobile && 'mt-7'}`}>
                    <p className='font-bold text-lg'>Company</p>
                    <p>About</p>
                    <p>Press</p>
                    <p>Events</p>
                    <p>Careers</p>
                    <p>Customers </p>
                    <p>Partners</p>
                </div>
            </div>
            <div className='flex justify-content-between align-items-center px-8 mx-5 border-top-2'>
                <div>
                    <h1 className='text-primary'>Appy</h1>
                </div>
                <div>
                    <p>&copy; 2023 All rights reserved.</p>
                </div>
                <div className='flex justify-content-between align-items-center'>
                    <img src={icon1} alt=""/>
                    <img src={icon2} alt="" className='ml-4'/>
                    <img src={icon3} alt="" className='ml-4'/>
                    <img src={icon4} alt="" className='ml-4'/>
                    <img src={icon5} alt="" className='ml-4'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;