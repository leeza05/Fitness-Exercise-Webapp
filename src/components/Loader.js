import React from 'react';
import { Stack } from '@mui/material';
import {Bars} from 'react-loader-spinner';

const Loader = () => {
    return(
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%" mt="20px">
            <Bars color="gray"></Bars>
        </Stack>
    )
}

export default Loader