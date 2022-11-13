import { useState } from 'react';

const Simple = () => {
    const [color, setColor] = useState('#e2e8f0');
    const colorPalette = ['red', 'aquamarine', 'blanchedalmond', '#ffb8e7'];

    // change color variable to random color
    const randomSimpleColor = (): void => {
        // function that loop through array until value is not equal
        const random = () => {
            let randomColor;
            do {
                let random = Math.floor(Math.random() * colorPalette.length);
                randomColor = colorPalette[random];
            } while (randomColor === color);
            return randomColor;
        };
        setColor(random());
    };

    // copy to clipboard function
    const copyColor = () => {
        navigator.clipboard.writeText(color);
    };

    return (
        // simple container
        <main
            className='flipperContainer bg-slate-200'
            style={{ backgroundColor: color && color }}
        >
            {/* simple infos */}
            <section className='flipperInfo' onClick={copyColor}>
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
            <button className='flipperBtn' onClick={randomSimpleColor}>
                Click me
            </button>
        </main>
    );
};

export default Simple;
