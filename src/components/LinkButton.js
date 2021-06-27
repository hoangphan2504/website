import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify-icons/simple-icons/facebook';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import githubIcon from '@iconify/icons-simple-icons/github';
import './ButtonWidth.scss';
import './WidthLimit.scss';

const LinkButton = (props) => {
	const [icon, setIcon] = useState('');
	useEffect(() => {
		if (props.link.includes('facebook')) {
			setIcon(<Icon icon={facebookIcon} />);
		} else if (props.link.includes('instagram')) {
			setIcon(<Icon icon={instagramIcon} />);
		} else if (props.link.includes('github')) {
			setIcon(<Icon icon={githubIcon} />);
		}
	}, [props]);

	return (
		<Button
			variant='outline-dark'
			className='mb-3 d-flex flex-column align-items-center text-center button max-button'
			href={props.link}
			target='_blank'
			size='lg'
			block>
			{icon}
			{props.name}
		</Button>
	);
};

export default LinkButton;
