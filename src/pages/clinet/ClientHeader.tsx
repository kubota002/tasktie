import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const ClientHeader = () => {
    const navigate = useNavigate();
    const handleNavigateAdd = () => {
        
        navigate("/client/add");
    }
    return(
        <Grid container spacing={2} alignItems="center" justifyContent="center"> 
            <Grid item>
                <Button variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} sx={{ minWidth: 120 }} onClick={handleNavigateAdd}>
                    顧客登録
                </Button>
            </Grid>
            <Grid item>
                <TextField
                    label="検索"
                    variant="outlined"
                    size="small"
                    sx={{ width: 300 }}
                    InputProps={{
                        endAdornment: (
                            <Button variant="contained" color="primary" size="small">
                                <SearchIcon />
                            </Button>
                        )
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default ClientHeader;