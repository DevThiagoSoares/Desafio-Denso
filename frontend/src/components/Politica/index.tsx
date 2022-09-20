import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";



export default function Politica() {

    return (
        <Box component="form">
            <Box  sx={{ bgcolor: '#00008B', height: '50px', width: '450px', display: 'flex' }}>
                <Typography color='#fff' margin={2.2} >Ótimo</Typography>
                <Typography color='#fff' margin={2.2} marginLeft={4} >Bom</Typography>
                <Typography color='#fff' margin={2.2} marginLeft={6} >Critico</Typography>
            </Box>
            <Box sx={{ bgcolor: '#fff', height: '330px', width: '450px', padding: 0.9 }}>
                <TextField sx={{width: '100px', height: '30px'}} id="outlined-basic" label="Ótimo" type="number" />
                <TextField sx={{width: '100px', height: '30px'}} id="outlined-basic" label="Bom" type="number" />
                <TextField sx={{width: '100px', height: '30px'}} id="outlined-basic" label="Critico" type="number" />
            </Box>
        </Box>
    )
}
