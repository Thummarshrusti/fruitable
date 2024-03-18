import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { IconButton } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';

function Products(props) {
    return (
        <div>
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
        </div>
    );
}

export default Products;