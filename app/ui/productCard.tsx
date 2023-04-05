import Image from "next/image";

const ProductCard = () => {
	return <div>
		<div className='relative'>
			<Image alt='Product' src={{
				src: '/sda.webp',
				height: 300,
				width: 300,
			}} />
			<div className='absolute top-0 right-0 bg-primary p-2 rounded-bl-md'>
				<span className='text-white font-bold'>-20%</span>
	</div>
		</div>
		<div className='mt-4 text-center'>
			<h1 className='text-2xl font-bold'>Product Name</h1>
				<span className='text-sm font-bold '>$100</span>
		</div>
	</div>
}

export default ProductCard
