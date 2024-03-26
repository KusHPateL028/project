import { React, useState, Stack } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Box, TextField } from '@mui/material';

export default function Index(props) {
    const [value, setValue] = useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DemoContainer components={['DatePicker']}> */}

            {/* <Box size="small"> */}

            <DatePicker
                size="small"
                label={props.label}
                value={value}
                onChange={(newValue) => setValue(newValue)}
                maxDate={dayjs(new Date())}
            />
            {/* </Box> */}
            {/* </DemoContainer> */}
        </LocalizationProvider>
    );
}