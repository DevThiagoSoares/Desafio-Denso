import React from 'react'
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MiniDrawer from "../components/Drawer"
import Relatori from "../components/Relatorio"

function Relatorio() {
    return (
        <Box>
            <MiniDrawer />
            <Box sx={{ bgcolor: '#cfe8fc', height: '200vh', padding: 10 }}>
                <Typography variant="h4" color='#00008B' marginBottom={2}>
                    Relatórios
                </Typography>
                <Relatori />
            </Box>
        </Box>
    )
}

export default Relatorio