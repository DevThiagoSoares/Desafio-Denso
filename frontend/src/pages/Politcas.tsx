import MiniDrawer from "../components/Drawer"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Politica from "../components/Politica";
import Button from '@mui/material/Button';

function Politicas() {
    return (
        <Box>
            <MiniDrawer />
            <Box sx={{ bgcolor: '#cfe8fc', height: '200vh', padding: 10 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    <Typography variant="h4" color='#00008B' marginBottom={2}>
                        Politicas
                    </Typography>
                    <Button sx={{height: '30px', alignItems: 'center', marginLeft: '45px'}}  variant="outlined" color="error">
                        Cadastrar Politica de estoque
                    </Button>
                </Box>
                <Politica />
            </Box>
        </Box>
    )
}

export default Politicas