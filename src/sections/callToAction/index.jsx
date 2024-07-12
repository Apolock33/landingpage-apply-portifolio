import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import ColInitial from '../../assets/imgs/Col-3.png';
import '../../assets/css/section1.css';
import useWindowDimensions from 'use-window-dimensions';

const CallToAction = () => {
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
        <section id='CallToAction' className={`p-4 flex justify-content-between align-items-center ${mobile && 'flex-column text-center p-0'}`}>
            <div className={`flex flex-column ${mobile ? 'flex-column text-center' : 'pl-8'}`}>
                <h1 className={`${mobile ? 'text-5xl mb-0' : 'text-7xl mb-0'}`}>Start now and get the <br /> best services</h1>
                <p className={`${mobile ? 'text-center text-base' : 'text-lg text-justify max-w-30rem'}`}>Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi dui ac consequat risus pharetra odio pulvinar. Id pellentesque in tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet sit risus elementum scelerisque.</p>
                <div className={`${mobile && 'flex justify-content-center mb-4'}`}>
                    <Button label='Get Started' className={`${mobile ? 'bg-primary border-round-lg' : 'text-2xl bg-primary border-round-lg'}`}></Button>
                </div>
            </div>
            <div className={`${mobile ? 'justify-content-center' : 'align-items-center'}`}>
                <img src={ColInitial} alt='Illustration' className={`${mobile ? 'max-w-26rem' : 'max-w-30rem'}`} />
            </div>
        </section>
    );
}

export default CallToAction;