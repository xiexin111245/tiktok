import { Box } from "@mui/system"
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import BrandSwitchIcon from '../../icons/accountsbrandswitchIcon.svg'
import {useAccountsRequestStore} from '@/app/(store)/store'

export default function RegionFilter() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const options = ["🌏 All","🇮🇩 Indonesia","🇻🇳 Viet Nam","🇹🇭 Thailand","🇯🇵 Japan"];
    const optionsMap = new Map<string,string>();
    optionsMap.set('🌏 All','🌏 All')
    optionsMap.set('🇮🇩 Indonesia','🇮🇩 ID')
    optionsMap.set('🇻🇳 Viet Nam','🇻🇳 VN')
    optionsMap.set('🇹🇭 Thailand','🇹🇭 TH')
    

    const setSelectRegion = useAccountsRequestStore(state => state.setRegion)
    const selectRegion = useAccountsRequestStore(state => state.accountsRequest.region)


    // const [selectRegion, setSelectRegion] = React.useState<string>("🇮🇩 Indonesia");
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const addMap = (event: React.MouseEvent<HTMLElement> , value: string) => {
        // console.log("VALUE", value);
        setSelectRegion(optionsMap.get(value)!)
        handleClose();
      };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-between'}}>
            <Typography variant="h6">{selectRegion ? selectRegion.split(' ')[0] : selectRegion}</Typography> 
            <Box>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <BrandSwitchIcon />
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >   
                    {options.map((option) => (
                        <MenuItem
                        key={option}
                        selected={option === "ONE"}
                        onClick={(e) => addMap(e, option)}
                        >
                        {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Box>
    )
}