import React, { useEffect, useState } from 'react';
import useWindowDimensions from 'use-window-dimensions';
import ColPriorizing from '../../assets/imgs/Col-2.png';

const Coments = () => {
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
        <section id='Coments' className={`p-4 flex flex-column justify-content-between align-items-center ${mobile ? 'flex-column p-0' : 'pl-8'}`}>
            <div className={`mt-6 ${mobile ? 'flex flex-column justify-content-center align-items-center' : 'flex justify-content-between align-items-center'}`}>
                <div className={`${!mobile && 'col'}`}>
                    <img src={ColPriorizing} alt='Illustration' className={`${mobile ? 'max-w-26rem' : 'max-w-30rem'}`} />
                </div>

                <div className={`${!mobile && 'col'} ${mobile && 'p-4'}`}>
                    <div className='pl-6'>
                        <h3 className='font-bold opacity-1'>Success Stories</h3>
                        <p className='pr-4'>"Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac scelerisque gravida sem."</p>
                    </div>
                    <p className='pl-6 text-sm'>Marie Poirot,</p>
                    <p className='font-bold pl-6 text-sm'>Bigapp</p>
                </div>
            </div>
        </section>
    );
}

export default Coments;