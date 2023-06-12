import { Box } from "@mui/material"
import {RpModel} from "../../../type/accounts-page"
import { GridRenderCellParams } from '@mui/x-data-grid';

export default function GmvCell(props: GridRenderCellParams<any, RpModel>){
    const { value } = props;
    return (
        <Box sx={{ display:'flex', flexDirection:'column' }}>  
            <Box sx={{ fontFamily:'SimHei', color: '#000000' , fontWeight: 900, fontSize: 25}}><b>€&nbsp;{value?.mainData}</b></Box>
            <Box sx={{color:'#707070' }}>Rp{value?.rpData}</Box>
        </Box>
    )
}