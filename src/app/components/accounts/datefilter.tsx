import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import {useAccountsRequestStore} from '@/app/(store)/store'

const ToggleButton = styled(MuiToggleButton)<{ selectedColor: string }>(({ selectedColor }) => ({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: selectedColor,
    },
  }));


export default function Datefilter() {
    

    const options = ['Day', 'Week', 'Month', 'Year', 'ALL']

    const optionsMap = new Map<string,string>();
    // const optionsMap = { 'Day': '1', 'Week': '7' ,'Month':'30','Year':'365','ALL':'-1'}
    optionsMap.set('Day','1')
    optionsMap.set('Week','7')
    optionsMap.set('Month','30')
    optionsMap.set('Year','365')
    optionsMap.set('ALL','-1')

    const [alignment, setAlignment] = React.useState('Day');

    const dateRange = useAccountsRequestStore(state => state.accountsRequest.dateRange)
    const setDateRange = useAccountsRequestStore(state => state.setDateRange)

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
        setDateRange(optionsMap.get(newAlignment)!)
    };

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,

    };

  
    return (
        <Stack spacing={2} alignItems="center">
            <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
                {
                    options.map((option,index) => (
                        <ToggleButton value={option} key={index} sx={{width:80,color:'#0000FF',borderColor:'#0000FF',borderWidth:'2px'}} selectedColor="#0000FF">
                            <b>{option}</b>
                        </ToggleButton>
                    ))
                }
                {/* <ToggleButton value="Week" key="Week" sx={{width:80,color:'#0000FF'}} selectedColor="#0000FF">
                <b>Week</b>
                </ToggleButton>
                <ToggleButton value="Month" key="Month" sx={{width:80,color:'#0000FF'}} selectedColor="#0000FF">
                <b> Month</b>
                </ToggleButton>
                <ToggleButton value="Year" key="Year" sx={{width:80,color:'#0000FF'}} selectedColor="#0000FF">
                <b> Year</b>
                </ToggleButton>
                <ToggleButton value="ALL" key="ALL" sx={{width:80,color:'#0000FF'}} selectedColor="#0000FF">
                <b> ALL</b>
                </ToggleButton> */}
            </ToggleButtonGroup>
        </Stack>
    );   
}