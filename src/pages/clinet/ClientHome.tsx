import React from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import ClientHeader from './ClientHeader';

const ClientHome = () => {
    return(
        <Container maxWidth={false} sx={{ padding: '20px 30px', marginTop: 4 }}>
            <ClientHeader />
        </Container>
    );
}

export default ClientHome;