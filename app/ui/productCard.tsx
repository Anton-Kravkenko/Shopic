import Image from "next/image";
import Link from "next/link";


const ProductCard = () => {
	return <div>
				<div className="duration-500   rounded-md group-hover:opacity-75">
					<Link href={'/catalog'}>
					
					<Image alt='Product' src={{
						src: '/sda.webp',
						height: 400,
						width: 400,
					}} className=" w-full object-cover object-center rounded-md"
					/>
					</Link>
				</div>
				<div className="mt-4 flex items-center justify-between">
					<Link href='/catalog'>
						<h3 className="text-lg text-white font-bold">
								Product name
						</h3>
						<p className="mt-1 text-sm text-gray-500">Category</p>
					</Link>
					<p className="text-lg font-bold text-gray-900">500$</p>
				</div>
			</div>
}

export default ProductCard
