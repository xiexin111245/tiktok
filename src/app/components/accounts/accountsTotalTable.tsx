import * as React from 'react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

import useAccountsStore from '@/app/(store)/store';
import { useAccountSelectedStore } from '@/app/(store)/store';

export default function AccountsTotalTable() {

    const selectAccountsId = useAccountSelectedStore(state => state.selectArray)
    const accounts = useAccountsStore(state => state.rowData)
    
    const selectAccountsCount = selectAccountsId.length
    const selectAccountsValue = accounts.filter((row) => selectAccountsId.includes(row.id))
    const selectAccountsGmv = selectAccountsValue.map((row) => row.GMV.mainData).reduce((a, b) => (a ? a : 0)  + ( b ? b : 0) , 0)
    const selectAccountsFollower = selectAccountsValue.map((row) => row.followers.mainData).reduce((a, b) => (a ? Number(a) : 0)  + ( b ? Number(b) : 0) , 0)
    const selectAccountsVideo = selectAccountsValue.map((row) => row.videoViews.mainData).reduce((a, b) => (a ? Number(a) : 0)  + ( b ? Number(b) : 0) , 0)
    const selectAccountsLive = selectAccountsValue.map((row) => row.liveStreamings.mainData).reduce((a, b) => (a ? Number(a) : 0)  + ( b ? Number(b) : 0) , 0)
    const selectAccountsAds = selectAccountsValue.map((row) => row.adsSpending.mainData).reduce((a, b) => (a ? Number(a) : 0)  + ( b ? Number(b) : 0) , 0)


    return (
        <Box sx={{ display:'flex', flexDirection:'row' ,width: 1 ,border:1, height: 1 ,borderRadius: '4px',borderColor:'grey.300' }}>
            <Box sx={{ width: 450, display:'flex' , flexDirection:'column', justifyContent: "center", alignItems:'flex-start',padding:'0px 12px'}}>
                <Typography fontWeight={600} fontSize={'14px'} lineHeight={'21px'}>Select {selectAccountsCount} Accounts</Typography>
                <Typography fontWeight={400} fontSize={'20px'} lineHeight={'32px'} letterSpacing={'0.75px'}>Total</Typography>
            </Box>
            <Box sx={{ display:'flex', flexDirection:'row' ,width: 1 }}>
                <Box sx={{ width: '20%', display:'flex' , flexDirection:'column', justifyContent: "center", alignItems:'flex-start' }}>
                    <Typography fontWeight={600} fontSize={'14px'} lineHeight={'21px'}>GMV(EUR)</Typography>
                    <Typography fontWeight={400} fontSize={'20px'} lineHeight={'32px'} letterSpacing={'0.75px'}>{selectAccountsGmv}</Typography>
                </Box>
                <Box sx={{ width: '20%',display:'flex' , flexDirection:'column', justifyContent: "center", alignItems:'flex-start' }}>
                    <Typography fontWeight={600} fontSize={'14px'} lineHeight={'21px'}># of Followers</Typography>
                    <Typography fontWeight={400} fontSize={'20px'} lineHeight={'32px'} letterSpacing={'0.75px'}>{selectAccountsFollower}</Typography>
                </Box>
                <Box sx={{ width: '20%', display:'flex' , flexDirection:'column', justifyContent: "center", alignItems:'flex-start'}}>
                    <Typography fontWeight={600} fontSize={'14px'} lineHeight={'21px'}># of Videos</Typography>
                    <Typography fontWeight={400} fontSize={'20px'} lineHeight={'32px'} letterSpacing={'0.75px'}>{selectAccountsVideo}</Typography>
                </Box>
                <Box sx={{ width: '20%', display:'flex' , flexDirection:'column', justifyContent: "center", alignItems:'flex-start'}}>
                    <Typography fontWeight={600} fontSize={'14px'} lineHeight={'21px'}># of Live streamings</Typography>
                    <Typography fontWeight={400} fontSize={'20px'} lineHeight={'32px'} letterSpacing={'0.75px'}>{selectAccountsLive}</Typography>
                </Box>
                <Box sx={{ width: '20%', display:'flex' , flexDirection:'column', justifyContent: "center", alignItems:'flex-start'}}>
                    <Typography fontWeight={600} fontSize={'14px'} lineHeight={'21px'}>Ads spending</Typography>
                    <Typography fontWeight={400} fontSize={'20px'} lineHeight={'32px'} letterSpacing={'0.75px'}>{selectAccountsAds}</Typography>
                </Box>
            </Box>
        </Box>
    );
}