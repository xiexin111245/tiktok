import { Box } from "@mui/system"
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import BrandSwitchIcon from '../../icons/accountsbrandswitchIcon.svg'
import {useAccountsRequestStore} from '@/app/(store)/store'


const options = ["All Brands", "CPD", "L'Oréal Paris", "Maybelline New York","Garnier"];

export default function BrandFilter() {
    const setBrand = useAccountsRequestStore(state => state.setBrand)
    const selectBrand = useAccountsRequestStore(state => state.accountsRequest.brand)


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const [selectBrand, setSelectBrand] = React.useState<string>("Maybelline New York");
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const addMap = (event: React.MouseEvent<HTMLElement> , value: string) => {
        // console.log("VALUE", value);
        setBrand(value)
        handleClose();
      };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-between'}}>
            <Typography variant="h6">{selectBrand}</Typography> 
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