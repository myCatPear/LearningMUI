import React from 'react';
import {Typography} from "@mui/material";

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant={'h1'}>H1 Heading</Typography>
            <Typography variant={'h2'}>H2 Heading</Typography>
            <Typography variant={'h3'}>H3 Heading</Typography>
            <Typography variant={'h4'}>H4 Heading</Typography>
            <Typography variant={'h5'}>H5 Heading</Typography>
            <Typography variant={'h6'}>H6 Heading</Typography>

            <Typography variant={'subtitle1'}>subtitle1</Typography>
            <Typography variant={'subtitle2'}>subtitle2</Typography>

            <Typography variant={'body1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque facere natus nemo, officia rerum. Aperiam maiores molestias neque pariatur?</Typography>
            <Typography variant={'body2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex facere fuga incidunt, mollitia natus quisquam quod ratione sint soluta.</Typography>

        </div>
    );
};
