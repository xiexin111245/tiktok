import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EnlanguageIcon from '../icons/enlanguage.svg';
import { Typography } from '@mui/material';
import ProfileIcon from '../icons/profileIcon.svg';

export default function LoginInfo() {
  return (
    <Box component="div" sx={{ display: 'flex' , flexDirection: 'row', justifyContent:'space-around' }}>
        <Button><EnlanguageIcon/></Button>
        <Typography component="h3" sx={{ color: 'black',display: 'flex', justifyContent:'center', alignItems: 'center'}}>accountname</Typography>
        <Button><ProfileIcon/></Button>
    </Box>
  );
}