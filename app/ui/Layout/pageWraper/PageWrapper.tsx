import {FC, PropsWithChildren} from "react";

interface PageWrapperProps {
	isHavePadding?: boolean;
	className?: string;

}

const PageWrapper:FC<PropsWithChildren<PageWrapperProps>> = ({children}, ...rest) => {
	return <div className='mx-4 p-4' {...rest}>{children}</div>
}

export default PageWrapper
