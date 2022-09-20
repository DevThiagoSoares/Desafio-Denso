import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MiniDrawer from "../components/Drawer"
import Dropzone from '../components/DropZone';


function Upload() {
    return (
        <Box>
            <MiniDrawer />

            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', padding: 10 }}>
                <Typography variant="h4" color='#00008B' marginBottom={2}>
                    Upload do arquivo
                </Typography>
                <Dropzone />
            </Box>

        </Box >
    )
}

export default Upload