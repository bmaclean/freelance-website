import React from 'react';
import ProfileImage from '../images/profile_image.png';
import {Card} from './';

// TODO: Suspense for image loading

export default function ProfileCard() {
	return (
		<Card
			style={{
				width: '350px',
				height: '500px',
				background: 'grey',
				borderRadius: '5px',
				backgroundImage: `url(${ProfileImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)',
				transition: 'box-shadow 0.5s'
			}}
		/>
	);
}
