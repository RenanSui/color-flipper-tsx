import { useState } from "react";

const Simple = () => {
    const colorPalette = ['red', 'aquamarine', 'blanchedalmond', '#ffb8e7'];

    return (
        // simple container
        <main className='flipperContainer bg-slate-200'>
            {/* simple infos */}
            <section className='flipperInfo'>
                <p className='pointer-events-none flex flex-col items-center text-3xl font-medium tracking-wide'>
                    Background Color:{' '}
                    <span className='flipperColor mt-4'>#e2e8f0</span>
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

export default Simple;
