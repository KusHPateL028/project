import { Alert } from '@mui/material'
import React from 'react'

export default function Index() {
    return (
        <Alert
            severity="success"
            sx={{ height: "40px" }}
        >
            Form Submitted Successfully
        </Alert>
    )
}
