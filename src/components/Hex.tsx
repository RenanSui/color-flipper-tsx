import { useState } from 'react';

const Hex = () => {
    const colorPalette = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ];

    return (
        // simple container
        <main className='flipperContainer bg-red-300'>
            {/* simple infos */}
            <section className='flipperInfo'>
                <p className='pointer-events-none flex flex-col items-center text-3xl font-medium tracking-wide'>
                    Background Color:{' '}
                    <span className='flipperColor mt-4'>#fca5a5</span>
                </p>
                {/* simple copy to clipboard */}
                <p className='pointer-events-none absolute bottom-0 right-0 mb-2 mr-4 tracking-wide text-primary'>
                    click to copy
                </p>
            </section>
            {/* simple button */}
            <button className='flipperBtn'>Click me</button>
        </main>
    );
};

export default Hex;
