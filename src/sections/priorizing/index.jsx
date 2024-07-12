import React, { useEffect, useState } from 'react';
import useWindowDimensions from 'use-window-dimensions';
import ColPriorizing from '../../assets/imgs/Col-1.png';

const Priorizing = () => {    
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
            <section id='Priorizing' className={`p-4 flex flex-column justify-content-between align-items-center ${mobile ? 'flex-column p-0' : 'pl-8'}`}>
            <div>
                <h1 className='text-5xl px-2 text-center'>Focus on what matters</h1>
                <p className='text-center'>Eget at purus mauris euismod metus vitae eget. Diam massa venenatis pellentesque facilisis nunc, varius.</p>
                <div className={`mt-6 ${mobile ? 'flex flex-column justify-content-center align-items-center' : 'flex justify-content-between align-items-center'}`}>
                    <div className={`${!mobile && 'col'}`}>
                        <img src={ColPriorizing} alt='Illustration' className={`${mobile ? 'max-w-26rem' : 'max-w-30rem'}`} />
                    </div>

                    <div className={`${!mobile && 'col'} ${mobile && 'p-4'}`}>
                        <div className='border-left-2 border-primary pl-6'>
                            <p className='font-bold'>Bibendum gravida dolor egestas aliquam</p>
                            <p className='pr-4'>Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac scelerisque gravida sem.</p>
                        </div>
                        <p className='font-bold border-left-2 pl-6'>Egestas lorem eget</p>
                        <p className='font-bold border-left-2 pl-6'>Tellus eget feugiat sit</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Priorizing;