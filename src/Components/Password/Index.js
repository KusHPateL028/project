import { Stack, InputAdornment, IconButton } from '@mui/material'
import { React, useState } from 'react'
import Input from '../../Components/Input/Index'
import { Key as KeyIcon,VisibilityOff, Visibility } from '@mui/icons-material';

export default function Index(props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Stack direction="row"  justifyContent={props.justifyContent} alignItems={props.alignItems} spacing={2}>
            <KeyIcon />
            <Input
                label={props.label}
                name={props.name}
                type={showPassword ? 'text' : 'password'}
                size={props.size}
                inputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={props.sx}
            // value={inputValue.firstName}
            // onChange={handleChange}
            // err={Boolean(error.firstName)}
            // helperText={error.firstName}=
            ></Input>
        </Stack>
    )
}
