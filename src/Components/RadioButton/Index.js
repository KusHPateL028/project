import React from 'react';
import { Stack, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';


export default function Index(props) {
    let newArr = props.array.map((item) => {
        return (<FormControlLabel name={props.name} key={item} value={item.toLowerCase()} control={<Radio />} label={item} />)
    })

    let properties = {};
    if (props.direction === "column") {
        properties.justifyContent = "center";
    } else {
        properties.alignItems = "center";
        properties.spacing = 2;
    }
    return (
        <Stack
            direction={props.direction}
            {...properties}
        >
            <FormLabel id="demo-row-radio-buttons-group-label"><strong>{props.label}</strong></FormLabel>
            <RadioGroup
                row={props.row}
                column={props.column}
                onChange={props.onChange}
            >
                {newArr}

            </RadioGroup>
        </Stack>
    );
}
