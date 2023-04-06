import {FC, PropsWithChildren} from "react";
import {useHeight} from "../../../utils/useWindowHeight";

interface PageWrapperProps {
	isHavePadding?: boolean;
	className?: string;

}

const PageWrapper:FC<PropsWithChildren<PageWrapperProps>> = ({children}, ...rest) => {
	const height = useHeight();
	return <div style={{
		minHeight: height - 236,
	}} className='mx-4 p-4' {...rest}>{children}</div>
}

export default PageWrapper
