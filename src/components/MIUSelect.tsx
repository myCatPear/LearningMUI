import React, {ChangeEvent, useState} from 'react';
import {Box, MenuItem, TextField} from "@mui/material";

const MiuSelect = () => {
    const [country, setCountry] = useState('INDIA')
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCountry(e.target.value as string)
    }
    return (
        <Box width='250px'>
            <TextField
                label={'Select country'}
                select
                value={country}
                onChange={handleChange}
                fullWidth
            >
                <MenuItem value={'IN'}>INDIA</MenuItem>
                <MenuItem value={'US'}>USA</MenuItem>
                <MenuItem value={'AU'}>AUSTRALIA</MenuItem>
            </TextField>

        </Box>
    );
};

export default MiuSelect;