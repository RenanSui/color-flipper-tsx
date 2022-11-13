import { useState } from 'react';

const Hex = () => {
    const [color, setColor] = useState('#f8718599');
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

    // change color variable to random color
    const randomSimpleColor = (): void => {
        // function that loop through array until value is not equal
        const random = () => {
            // create color container
            let randomColor = '#';

            // for loop to return random array index
            for (let i = 0; i <= 7; i++) {
                let randomNumber = Math.floor(
                    Math.random() * colorPalette.length,
                );
                randomColor += colorPalette[randomNumber];
            }
            return randomColor;
        };

        // set color variable to random
        setColor(random());
    };

    // copy to clipboard function
    const copyColor = () => {
        navigator.clipboard.writeText(color);
    };

    return (
        // simple container
        <main
            className='flipperContainer bg-red-400'
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

export default Hex;
