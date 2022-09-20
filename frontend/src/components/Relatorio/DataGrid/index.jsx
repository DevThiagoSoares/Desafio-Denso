import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Box, Checkbox, Table } from '@mui/material';

const DataGrid = ({ csv }) => {
    if (!csv) {
        return null;
    }

    return (
        <Box>
            <Table sx={{ backgroundColor: '#fff' }} >
                <TableHead sx={{ backgroundColor: '#fff', height: '70px', width: '100vw' }} >
                    <TableRow>
                        {csv.header.map((headerName) => (
                            <TableCell sx={{ backgroundColor: '#ffdd', height: '70px', width: '100vw' }} key={headerName}>{headerName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody sx={{ backgroundColor: '#ffe' }}>
                    {csv.data.map((row, index) => (
                        <TableRow key={index}>
                            {row.map((col) => (
                                <TableCell key={col}>{col}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </Box>
    );
};

export default DataGrid;
