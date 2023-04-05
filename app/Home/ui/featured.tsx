import ProductCard from '../../ui/productCard'

const Featured = () => {
	return <div className='mt-10'>
		<h1 className='text-6xl text-center font-bold'>Featured</h1>
		<h4 className='text-lg text-center font-bold' >Product</h4>
		<div className='flex flex-wrap gap-4 justify-center mt-10' >
			<ProductCard/>
			<ProductCard/>
			<ProductCard/>
			<ProductCard/>
			
	</div>
	</div>
}

export default Featured
