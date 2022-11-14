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

    const setRandomHexColor = (): void => {
        let hexColorContainer = '#';

        const hexColorDigitsAmount = 8;

        // for loop returning random index within color Palette
        for (let i = 0; i < hexColorDigitsAmount; i++) {
            let randomNumber = Math.floor(Math.random() * colorPalette.length);
            hexColorContainer += colorPalette[randomNumber];
        }

        setColor(hexColorContainer);
    };

    const copyToClipboardColor = () => {
        navigator.clipboard.writeText(color);
    };

    return (
        // simple container
        <main
            className='flipperContainer bg-red-400'
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
            <button className='flipperBtn' onClick={setRandomHexColor}>
                Click me
            </button>
        </main>
    );
};

export default Hex;
