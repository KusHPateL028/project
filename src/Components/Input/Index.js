import { React } from 'react'
import { TextField } from '@mui/material';

export default function Index(props) {
    return (
        <TextField
            id="input-with-icon-textfield"
            required={props.required}
            name={props.name}
            value={props.value}
            type={props.type}
            label={props.label}
            variant="outlined"
            size={props.size}
            onChange={props.onChange}
            margin="dense"
            inputProps={props.InputProps}
            error={props.err}
            helperText={props.helperText}
            InputProps={props.inputProps}
            InputLabelProps={{
                shrink: true,
              }}
            sx={props.sx}
        />
    );
}
