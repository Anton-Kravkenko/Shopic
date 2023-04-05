import Image from 'next/image'
import Button from '../../ui/Button'

const Banner = () => {
	return	<div className='flex items-center h-[80vh] justify-between max-w-[1200px] mx-auto'>
		<div className='max-w-lg'>
			<h1 className='text-6xl font-bold mb-5'>Have a nice day.</h1>
			<h2 className='text-2xl font-thin text-gray mb-4'>This project was made by Anton Kravchenko, for the portfolio, using next, tailwind, redux toolkit and others</h2>
			<div className='flex gap-3'>
				<Button text='Catalog' variant='primary' link={'/catalog'}	/>
				<Button text='About' variant='secondary'	/>
			</div>
		</div>
		
		<div className='border-white justify-center flex items-center border-2 rounded-full h-[500px]'>
			<Image alt='Logo' className='scale-[1.8] justify-center items-center' src={{
				src: '/nike.png',
				height:400,
				width: 500,
			}}    />
		</div>
	</div>
}

export default Banner
