import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
	const list = [
		{ link: 'https://www.facebook.com/hwaengfan/', name: '@hwaengfan' },
		{
			link: 'https://www.instagram.com/hwaengfan/',
			name: '@hwaengfan',
		},
		{ link: 'https://github.com/hwaengfan', name: '@hwaengfan' },
	];

	return (
		<ListGroup>
			<div className='mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center'>
				<Image
					alt='logo'
					width='300'
					height='250'
					src={`${process.env.PUBLIC_URL}/profile.png`}
					className='mb-4'
					rounded
				/>
				<h5 className='mb-4 text-black'>My Socials</h5>
				{list.map((list, index) => (
					<LinkButton key={index} link={list.link} name={list.name} />
				))}
			</div>
		</ListGroup>
	);
};

export default LinkList;
