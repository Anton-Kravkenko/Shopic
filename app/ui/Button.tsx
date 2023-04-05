import cn from 'clsx'
import Link from 'next/link'
import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
text: string;
link?: string;
className?: string;
variant: 'primary' | 'secondary';
}
const Button:FC<ButtonProps> = ({text,variant,link,className, ...rest}) => {
	return <button {...rest} className={cn(
		'px-4 py-2 rounded-md ease-in-out transition duration-500  text-white font-bold', className,
		{
			"hover:bg-white hover:text-black hover:animate-pulse": variant === 'primary',
			"hover:bg-black hover:text-white hover:animate-pulse": variant === 'secondary',
			'bg-primary': variant === 'primary',
			'bg-secondary': variant === 'secondary',
		}
	)}>{link ? <Link href={link} >{text.toUpperCase()}</Link> : text.toUpperCase() }</button>
}

export default Button
