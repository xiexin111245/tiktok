import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AccountSummaryCell from './tablecell/accountSummaryCell';
import GmvCell from './tablecell/gmvCell';
import { AccountSummary, RpModel, ViewAccount}  from '../../type/accounts-page'
import VeiwCell from './tablecell/viewCell';
import { AccountsResponse } from '@/app/api/type/accounts';
import useAccountsStore from '@/app/(store)/store';
import {RowData} from '@/app/(store)/types';
import { useAccountSelectedStore } from '@/app/(store)/store';


const columns: GridColDef[] = [
    { 
      field: 'account_id', 
      headerName: 'Accounts', 
      width: 400, 
      renderCell:  AccountSummaryCell
    },
    {
      field: 'GMV',
      headerName: 'GMV(EUR)',
      width: 180,
      renderCell: GmvCell
    },
    {
      field: 'followers',
      headerName: '# of Followers',
      width: 180,
      renderCell: VeiwCell
    },
    {
      field: 'videoViews',
      headerName: '# of Videos',
      width: 180,
      renderCell: VeiwCell
    },
    {
        field: 'liveStreamings',
        headerName: '# of Live Streamings',
        width: 180,
        renderCell: VeiwCell
    },
    {
        field: 'adsSpending',
        headerName: 'Ads Spending',
        width: 180,
        renderCell: GmvCell
    },
    {
        field: 'topSellingProducts',
        headerName: 'Top Selling Products',
        minWidth: 200,
    }
  ];

  const accountSummary : AccountSummary = {
    account_id: 1,
    account_name: '@maybelline_indonesia',
    img: '/AccountLogo.png',
    title: 'maybelline_indonesia',
    brand: 'maybelline_indonesia',
    region: '🇮🇩 Indonesia',
  }

  const gmvData : RpModel = {
    mainData: 100000,
    rpData: 100000
  }

  const followers: ViewAccount = {
    mainData: 100000
  }

  const videoViews: ViewAccount = {
    mainData: 100000
  }

  const liveStreamings: ViewAccount = {
    mainData: 200
  }

  const adsSpending: RpModel = {
    mainData: 100000,
    rpData: 100000
  }

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rows = [
    { id:1, account_id: accountSummary, GMV: gmvData, followers: followers, videoViews: videoViews ,liveStreamings: liveStreamings, adsSpending: adsSpending, topSellingProducts: null},
  ];

export default function AccountsDataTable(prop: {data: AccountsResponse}) {

    const rowsData:RowData[] = prop.data.accounts.map((account) => {
        return {
            id: getRandomInt(0,1000000),
            account_id: {
              account_id: account.accountInfo.account_id,
              account_name: account.accountInfo.account_name ,
              img: '/AccountLogo.png',
              title: account.accountInfo.brand_name,
              brand: account.accountInfo.brand_name,
              region: account.accountInfo.account_region,
            },
            GMV: {
              mainData:account.accountCntGmv,
              rpData:account.accountCntGmv,
            }, 
            followers: {
              mainData:account.accountCntFollower,
            },
            videoViews:{
              mainData:account.accountCntPostedVideo,
            } ,
            liveStreamings:{
              mainData:account.accountCntLivestream,
            },
            adsSpending: {
              mainData:account.accountAdsSpend,
            },
            topSellingProducts: null
        }
    })
  
  const setRowData = useAccountsStore((state) => state.setRowData);
  setRowData(rowsData);
  
  const setSelectArray = useAccountSelectedStore((state) => state.setSelectArray);

    return (
        
        <Box sx={{ height: '90%', width: '100%' }}>
          <DataGrid
            rows={rowsData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            onRowSelectionModelChange={(rowSelectionModel, details)=> {
              const selectArray: number[] = JSON.parse(JSON.stringify(rowSelectionModel))
              setSelectArray(selectArray)
            }}
            disableRowSelectionOnClick
            getRowHeight={() => 'auto'} 
            getEstimatedRowHeight={() => 200}
          />
        </Box>
      );
}