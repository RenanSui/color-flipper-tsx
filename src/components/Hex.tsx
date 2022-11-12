const Hex = () => {
	return (
		<main className='bg-slate-200 w-screen flex flex-col flex-1 justify-center items-center'>
			<section className='bg-gray-900 text-gray-100 py-6 px-32 rounded-xl relative cursor-pointer'>
				<p className='text-3xl flex flex-col items-center font-medium tracking-wide'>
					Background Color: <span className='mt-4'>#f0f8ff</span>
				</p>
				<p className='absolute bottom-0 right-0 mb-2 mr-4 tracking-wide'>
					click to copy
				</p>
			</section>
			<button className='text-3xl font-medium text-gray-900 hover:text-gray-100 hover:bg-gray-900 border-2 border-solid border-gray-900 rounded-md mt-16 py-3 px-14 tracking-wide'>
				Click me
			</button>
		</main>
	);
};

export default Hex;
