import React from 'react'
import { Avatar } from '@mui/material'

function stringToColor(string) {
	let hash = 0;
	let i;
	const alphabets = 'abcdefghijklmnopqrstuvwxyz';
	let str = string.length > 3 ? string : `${string + Math.floor(Math.random() * alphabets.length)}`

	for (i = 0; i < str.length; i++) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `${value.toString(16)}`;
	}

	return color;
}

function stringAvatar(name) {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.slice(0, 1)}`,
	};
}

export default function Index(props) {
  return (
    <Avatar src={props.img} {...stringAvatar(props.name)}  style={{cursor:"pointer"}} />
  )
}
