import { Button } from "@mui/material"
import ExportIcon from '../../icons/accountsexport.svg'

export default function ExportButton() {
    return (
        <Button variant="contained" sx={{ background:'#0000FF', color: '#FFFFFF',}} startIcon={<ExportIcon />}>
            <b>Export</b>
        </Button>
    )
}