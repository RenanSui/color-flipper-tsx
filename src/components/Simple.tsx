import { useState } from 'react';

const Simple = () => {
    const [color, setColor] = useState('#e2e8f0');
    const colorPalette = ['red', 'aquamarine', 'blanchedalmond', '#ffb8e7'];

    const setRandomSimpleColor = (): void => {
        let randomColorContainer = null;

        // do while looping array until value is not equal
        do {
            let randomNumber = Math.floor(Math.random() * colorPalette.length);
            randomColorContainer = colorPalette[randomNumber];
        } while (randomColorContainer === color);

        setColor(randomColorContainer);
    };

    const copyToClipboardColor = () => {
        navigator.clipboard.writeText(color);
    };

    return (
        // simple container
        <main
            className='flipperContainer bg-slate-200'
            style={{ backgroundColor: color && color }}
        >
            {/* simple infos */}
            <section className='flipperInfo' onClick={copyToClipboardColor}>
                <p className='pointer-events-none flex flex-col items-center text-3xl font-medium tracking-wide'>
                    Background Color:{' '}
                    <span
                        className='flipperColor mt-4 transition-all duration-500'
                        style={{ color: color && color }}
                    >
                        {color}
                    </span>
                </p>
                {/* simple copy to clipboard */}
                <p className='pointer-events-none absolute bottom-0 right-0 mb-2 mr-4 tracking-wide text-primary'>
                    click to copy
                </p>
            </section>
            {/* simple button */}
            <button className='flipperBtn' onClick={setRandomSimpleColor}>
                Click me
            </button>
        </main>
    );
};

export default Simple;
