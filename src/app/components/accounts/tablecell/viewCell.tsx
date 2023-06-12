import { Box } from "@mui/material"
import { GridRenderCellParams } from '@mui/x-data-grid';
import {ViewAccount} from "../../../type/accounts-page"

export default function VeiwCell(props: GridRenderCellParams<any, ViewAccount>) {
    const { value } = props;
    
    return (
        <Box sx={{ display:'flex', flexDirection:'column' }}>  
            <Box sx={{ fontFamily:'SimHei', color: '#000000' , fontWeight: 900, fontSize: 25}}><b>€&nbsp;{value?.mainData}</b></Box>
            <Box sx={{color:'#707070' }}>{value?.compareData ? value?.compareData: "—" }</Box>
        </Box>
    )
}
    