import { GridRenderCellParams } from '@mui/x-data-grid';

export default function TopSellingProductsCell(props: GridRenderCellParams<any, any>) { 
    const { value } = props;
    return (
        <div>
            {value}
        </div>
    )
}