import React, {useState} from 'react';
import {Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {FormatBold} from "@mui/icons-material";
import {FormatItalic} from "@mui/icons-material";
import {FormatUnderlined} from "@mui/icons-material";
export const MuiButton = () => {
    const  [formats, setFormats] = useState<string[]>([])
    const handlerFormatChange = (_event:React.MouseEvent<HTMLElement>, updateFormat:string[]) => {
        setFormats(updateFormat)
    }
    console.log(formats)
    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <Button variant={'text'}>Text</Button>
                <Button variant={'contained'}>contained</Button>
                <Button variant={'outlined'}>outlined</Button>
            </Stack>

            <Stack direction={'row'} spacing={2}>
                <Button variant={'contained'} color='primary'>primary</Button>
                <Button variant={'contained'} color='secondary'>secondary</Button>
                <Button variant={'contained'} color='error'>error</Button>
                <Button variant={'contained'} color='warning'>warning</Button>
                <Button variant={'contained'} color='info'>info</Button>
                <Button variant={'contained'} color='success'>success</Button>
            </Stack>

            <Stack display={'block'}>
                <Button variant={'contained'} size={'small'}>small</Button>
                <Button variant={'contained'} size={'medium'}>medium</Button>
                <Button variant={'contained'} size={'large'}>large</Button>
            </Stack>

            <Stack direction={'row'} spacing={2}>
                <Button variant={'contained'} startIcon={<SendIcon/>}>Send</Button>
                <Button variant={'contained'} endIcon={<SendIcon/>}>Send</Button>

                <IconButton color={'info'}>
                    <SendIcon/>
                </IconButton>
            </Stack>

            <Stack direction={'row'}>
                <ButtonGroup variant={'outlined'}>
                    <Button>Left</Button>
                    <Button >center</Button>
                    <Button >right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label={'text-formatting'} value={formats} onChange={handlerFormatChange}>
                    <ToggleButton value={'bold'}  aria-label={'bold'}>
                        <FormatBold/>
                    </ToggleButton>
                    <ToggleButton value={'italic'} aria-label={'italic'}>
                        <FormatItalic/>
                    </ToggleButton>
                    <ToggleButton value={'underline'} aria-label={'underline'}>
                        <FormatUnderlined/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>

    );
};
