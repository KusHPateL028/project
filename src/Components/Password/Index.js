import { Stack, InputAdornment, IconButton, TextField } from '@mui/material'
import { React, useState } from 'react'
import { Key as KeyIcon, VisibilityOff, Visibility } from '@mui/icons-material';


export default function Index(props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Stack direction="row" justifyContent={props.justifyContent} spacing={2}>
            <KeyIcon style={{ marginTop: "10px" }} />
            <TextField
                required={props.required}
                label={props.label}
                name={props.name}
                type={showPassword ? 'text' : 'password'}
                size={props.size}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" >
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={props.onChange}
                value={props.value}
                error={props.err}
                helperText={props.helperText}
                pattern={props.pattern}
                sx={props.sx}
            ></TextField >
        </Stack >
    )
}
