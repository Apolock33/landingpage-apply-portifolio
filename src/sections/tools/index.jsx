import React, { useEffect, useState } from 'react';
import Vector1 from '../../assets/imgs/Icon.png';
import Vector2 from '../../assets/imgs/Icon-1.png';
import Vector3 from '../../assets/imgs/Icon-2.png';
import useWindowDimensions from 'use-window-dimensions';
import ColTools from '../../assets/imgs/Col.png'

const Tools = () => {
    const { width } = useWindowDimensions();
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if (width <= 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    });

    return (
        <section id='Tools' className={`p-4 flex flex-column justify-content-between align-items-center ${mobile ? 'flex-column p-0' : 'pl-8'}`}>
            <div className='p-6 grid justify-content-center'>
                <div className={`${mobile ? 'text-center' : 'col text-center'}`}>
                    <img src={Vector1} />
                    <h3>Fermentum amet</h3>
                    <p className='max-w-25rem'>Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.</p>
                </div>
                <div className={`${mobile ? 'text-center' : 'col text-center'}`}>
                    <img src={Vector2} />
                    <h3>Dignissim quam</h3>
                    <p className='max-w-25rem'>Quam sed neque vitae viverra purus venenatis ac non. Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam, elit ut non.</p>
                </div>
                <div className={`${mobile ? 'text-center' : 'col text-center'}`}>
                    <img src={Vector3} />
                    <h3>Risus morbi</h3>
                    <p className={`${!mobile && 'max-w-25rem'}`}>Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est elit odio at augue consequat.</p>
                </div>
            </div>
            <div>
                <h1 className='text-5xl px-2 text-center'>All The Essential Tools</h1>
                <p className='text-center'>Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</p>
                <div className={`mt-6 ${mobile ? 'flex flex-column justify-content-center align-items-center' : 'flex justify-content-between align-items-center'}`}>
                    <div className={`${!mobile && 'col'}`}>
                        <img src={ColTools} alt='Illustration' className={`${mobile ? 'max-w-26rem' : 'max-w-30rem'}`} />
                    </div>

                    <div className={`${!mobile && 'col'} ${mobile && 'p-4'}`}>
                        <div className='border-left-2 border-primary pl-6'>
                            <p className='font-bold'>Sem augue tempus</p>
                            <p className='pr-8'>Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.</p>
                        </div>
                        <p className='font-bold border-left-2 pl-6'>Habitant integer interdum a</p>
                        <p className='font-bold border-left-2 pl-6'>Tempus natoque id</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tools;