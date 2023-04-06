import Link from 'next/link'
import {BsGithub, BsLinkedin, BsTelegram} from 'react-icons/bs'

const Header = () => {
	return <div className='p-4 bg-black h-[150px] w-full  mx-4  mx-auto justify-center  items-center'>
<h1	className='text-3xl font-bold text-center text-white'>Shopic by Anton</h1>
		<h2 className='text-xl font-thin  text-center text-gray mb-4'>If you like what I did, you can write me on social networks or rate my github</h2>
		<div className='flex justify-center gap-4'>
 <Link href={'https://github.com/Anton-Kravkenko'}>		<BsGithub color='white' size='24'/></Link>
			<Link href={'https://t.me/AntonKravcenco'}>		<BsTelegram color='white' size='24'/></Link>
			<Link href={'https://www.linkedin.com/in/anton-kravkenko-63299a25a'}>		<BsLinkedin color='white' size='24'/></Link>
		</div>

	</div>
}

export default Header
