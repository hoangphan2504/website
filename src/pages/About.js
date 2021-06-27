import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';
import '../components/WidthLimit.scss';

const About = () => {
	const profile = (
		<Image
			alt='logo'
			width='300'
			height='250'
			src={`${process.env.PUBLIC_URL}/profile.png`}
			className='mb-4'
			rounded
		/>
	);

	return (
		<ListGroup>
			<div className='mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center'>
				{profile}
				<h4 className='text-black mb-4'>
					<strong>About me</strong>
				</h4>
				<h5 className='mb-4 text-black'>I am an aspiring programmer</h5>
			</div>
		</ListGroup>
	);
};

export default About;
