export interface RowData {
    id: number;
    account_id: {
        account_id: string | undefined;
        account_name: string | undefined;
        img: string;
        title: string | undefined;
        brand: string | undefined;
        region:string | undefined;
    },
    GMV: {
        mainData:number | undefined;
        rpData:number | undefined;
    }, 
    followers: {
        mainData:number | undefined;
    },
    videoViews:{
        mainData:number | undefined;
    } ,
    liveStreamings:{
        mainData:number | undefined;
    },
    adsSpending: {
        mainData:number | undefined;
    },
    topSellingProducts: null
}