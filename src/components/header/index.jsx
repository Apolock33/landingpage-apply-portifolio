import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import useWindowDimensions from 'use-window-dimensions';
import { FiMenu } from 'react-icons/fi';

const Header = ({ children }) => {
    const menuLeft = useRef(null);
    const { width, height } = useWindowDimensions();
    const [mobile, setMobile] = useState(false);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-upload'
                }
            ]
        }
    ];

    useEffect(() => {
        if (width <= 768) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    })

    return (
        <>
            <header className='p-2 flex justify-content-between align-items-center'>
                <div className='mt-2 ml-3 flex align-items-center'>
                    <h1 className='text-primary'>Appy</h1>
                    <nav className={`${mobile ? 'hidden' : 'ml-6 gap-2 flex align-items-center'}`}>
                        <div>
                            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                            <Button text label="Products" icon="pi pi-chevron-down" iconPos='right' onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup className='text-lg font-medium text-black-alpha-90' />
                        </div>
                        <div>
                            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                            <Button text label="Business Solutions" icon="pi pi-chevron-down" iconPos='right' onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup className='text-lg font-medium text-black-alpha-90' />
                        </div>
                        <div>
                            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                            <Button text label="Help Center" icon="pi pi-chevron-down" iconPos='right' onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup className='text-lg font-medium text-black-alpha-90' />
                        </div>
                        <div>
                            <Button text label="Pricing" className='text-lg font-medium text-black-alpha-90' />
                        </div>
                    </nav>
                </div >
                {mobile ?
                    <Button text icon={<FiMenu size={25} />} className='mr-4'>

                    </Button>
                    :
                    <div className='mr-3'>
                        <Button label='LogIn' text className='mr-3'></Button>
                        <Button className='bg-primary border-round-lg' label='Get Started'></Button>
                    </div>
                }
            </header >
            {children}
        </>
    );
}

export default Header;