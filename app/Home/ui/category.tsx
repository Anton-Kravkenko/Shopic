import Button from '../../ui/Button'

const Category = () => {
	return <div className='mt-10'>
		
		<h1 className='text-5xl text-center font-bold mb-10'>Category</h1>
		
			<div className='flex justify-center gap-3'>
				<div style={{
					backgroundImage: 'url(/category_casual.jpg)',
					backgroundSize: 'cover',
					width: '300px',
					height: '400px',
					position: 'relative',
				}}>
				<Button variant='secondary'	text='Casual' className='left-3 absolute bottom-3' />
				</div>
				
				<div style={{
					backgroundImage: 'url(/category_football.webp)',
					backgroundSize: 'cover',
					width: '300px',
					height: '400px',
					position: 'relative',
				}}>
					<Button variant='primary'	text='Football' className='left-3 absolute bottom-3' />
				</div>
				
				<div style={{
					backgroundImage: 'url(/category_running.jpg)',
					backgroundSize: 'cover',
					width: '300px',
					height: '400px',
					position: 'relative',
				}}>
					<Button variant='primary'	text='Running' className='left-3 absolute bottom-3'/>
				</div>
				

				
			
			</div>
	</div>
}

export default Category
