export interface AccountSummary {
    account_id: number;
    img: string ;
    title: string;
    brand: string;
    account_name: string;
    path?: string;
    region: string;
}

export interface RpModel {
    mainData: number;
    rpData: number;
}

export interface ViewAccount {
    mainData: number;
    compareData?: number;
}