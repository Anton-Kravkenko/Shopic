import Image from "next/image";
import Link from "next/link";
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {MenuItem} from "./MenuItem";

const Header = () => {
	return <div className='p-4 mx-4 flex items-center justify-between'>
	<Image alt='Logo' src={{
		src: '/logo.png',
		height: 60,
		width: 80,
	}} />
		<div className='flex items-center'>
		{
			MenuItem.map((item, index) => (
				<div key={index}>
				<Link href={item.path} className='inline-block p-3 font-bold'>{item.name}</Link>
				</div>
			))
		}
		</div>
		<div className='flex gap-3'>
			<AiOutlineHeart color='white' size='24'/>
			<AiOutlineShoppingCart  color='white' size='24'/>
		</div>
	</div>
}

export default Header
