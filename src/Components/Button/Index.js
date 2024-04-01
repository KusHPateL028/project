import { Button } from '@mui/material'
import { React , useState } from 'react'

export default function Index(props) {
	const variant = props.variant;
	const [hovered, setHovered] = useState(false);
	return (
		<Button
		variant={hovered ? (variant === 'contained'? 'outlined':'contained'):variant}
			type={props.type}
			onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
			sx={{width:props.width}}
			onClick={props.onClick}
		>{props.text}</Button>
	)
}
