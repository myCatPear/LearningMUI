import React from 'react';
import {InputAdornment, Stack, TextField} from "@mui/material";

const MuiTextField = () => {
    return (
       <Stack spacing={3}>
           <Stack direction={'row'} spacing={2}>
               <TextField label={'name'} variant={'filled'}/>
               <TextField label={'name'} variant={'outlined'}/>
               <TextField label={'name'} variant={'standard'}/>
           </Stack>

           <Stack direction={'row'} spacing={2}>
               <TextField label={'Small secondary'} size={'small'} color={'secondary'}/>
           </Stack>

           <Stack direction={'row'} spacing={2}>
               <TextField label={'Form input'} required/>
               <TextField
               label={'Password'}
               type={'password'}
               helperText={'Do not share your password with anyone'}
               />
           </Stack>

           <Stack direction={'row'} spacing={2}>
               <TextField label={'Amount'} InputProps={{
                   startAdornment:<InputAdornment position={'start'}>$</InputAdornment>
               }}/>
               <TextField label={'Weight'} InputProps={{
                   endAdornment:<InputAdornment position={'end'}>kg</InputAdornment>
               }}/>
           </Stack>

       </Stack>
    );
};

export default MuiTextField;