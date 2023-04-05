import Image from "next/image";
import Link from "next/link";
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {MenuItem} from "./MenuItem";

const Header = () => {
	return <div className='p-4 mx-4 flex mx-auto max-w-[1200px] items-center justify-between'>
		<div className='flex gap-4 items-center'>
			<div>
		<Image alt='Logo' src={{
		src: '/logo.png',
		height: 30,
		width: 100,
		}} />
			</div>
			<div className='flex items-center'>
				{
					MenuItem.map((item, index) => (
						<div key={index}>
							<Link href={item.path} className='inline-block p-3 font-bold'>{item.name}</Link>
						</div>
					))
				}
			</div>
		</div>
			<form className='w-[30%] items-center'>
				<label htmlFor="default-search"
				       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
						     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</div>
					<input type="search" id="default-search"
					       className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:outline-none border-transparent"
					       placeholder="Search product..." required/>
						<button type="submit"
						        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
						</button>
				</div>
			</form>
			<div className='flex gap-3'>
			<AiOutlineHeart color='white' size='24'/>
			<AiOutlineShoppingCart  color='white' size='24'/>
		</div>
	</div>
}

export default Header
