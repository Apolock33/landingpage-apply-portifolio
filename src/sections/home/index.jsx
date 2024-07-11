import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import ColInitial from '../../assets/imgs/Colinitial.png';
import '../../assets/css/section1.css';
import useWindowDimensions from 'use-window-dimensions';

const Home = () => {
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
        <section id='Home' className={`p-4 flex justify-content-between align-items-center ${mobile && 'flex-column text-center p-0'}`}>
            <div className={`flex flex-column ${mobile ? 'flex-column text-center pl-0' : 'pl-8'}`}>
                <h1 className={`${mobile ? 'text-5xl mb-0' : 'text-7xl mb-0'}`}>Building Apps Just <br /> Got Easier</h1>
                <p className={`${mobile ? 'text-center text-base' : 'text-lg text-justify max-w-30rem'}`}>Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</p>
                <div className={`${mobile && 'flex justify-content-between'}`}>
                    <Button label='Get Started' className={`${mobile ? 'bg-primary border-round-lg' : 'text-2xl bg-primary border-round-lg'}`}></Button>
                    <Button label='Watch Video' icon={<FaPlay />} text className={`${mobile ? 'border-round-lg gap-2 align-items-center' : 'text-2xl border-round-lg font-bold gap-2 ml-8'}`}></Button>
                </div>
            </div>
            <div className={`${mobile ? 'justify-content-center' : 'align-items-center pr-8'}`}>
                <img src={ColInitial} alt='Illustration' className={`${mobile ?'max-w-26rem':'max-w-30rem'}`} />
            </div>
        </section>
    );
}

export default Home;