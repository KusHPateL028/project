import React, { useState } from 'react'
import { TextField } from '@mui/material';

export default function Index(props) {
    // const [inputValue, setInputValue] = useState('');
    // const [hasError, setHasError] = useState(false);

    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     setInputValue(value);

    //     // Your custom validation logic
    //     // For example, let's consider the input is invalid if it's empty
    //     setHasError(value === " ");
    // };

    return (
        <TextField
            id="outlined-basic"
            type={props.type}
            label={props.label}
            variant="outlined"
            size="small"
            onChange={handleChange}
            margin="dense"
            error={hasError}
            value={inputValue}
            helperText={hasError ? 'This field is required' : ''}
            sx={{ mx: 1, my: 3 }}
        />
    );
}
