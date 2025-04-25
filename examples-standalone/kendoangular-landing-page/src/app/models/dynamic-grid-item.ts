export interface DynamicGridItem {
    id: number;
    company: string;
    assetType: string;
    price: number;
    change: number;
    timeline: number[];
    status: 'Filled' | 'Open' | 'Rejected';
}
