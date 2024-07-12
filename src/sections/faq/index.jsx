import React, { useEffect, useState } from 'react';
import useWindowDimensions from 'use-window-dimensions';
import ColPriorizing from '../../assets/imgs/Col-1.png';
import { Accordion, AccordionTab } from 'primereact/accordion';

const FAQ = () => {
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
        <section id='FAQ' className={`p-4 flex flex-column justify-content-between align-items-center ${mobile ? 'flex-column p-0' : 'pl-8'}`}>
            <div>
                <h1 className='text-5xl px-2 text-center'>Answers to your questions</h1>
                <Accordion activeIndex={0} className='min-w-30rem'>
                    <AccordionTab header="Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Sagittis consectetur gravida nec turpis eros, id sit et, dictum?">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </section>
    );
}

export default FAQ;