import PageWrapper from '../ui/Layout/pageWraper/PageWrapper'
import Banner from './ui/Banner'
import Category from './ui/category'
import Featured from './ui/featured'

const General = () => {
	return <PageWrapper>
		<Banner/>
		<Featured/>
		<Category/>
	</PageWrapper>
}

export default General

