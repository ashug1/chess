import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';
export default function Loader() {
    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <br />
            <CircularProgress sx={{ m: '0 auto' }} />
            <br />
        </Stack>
    );
}
