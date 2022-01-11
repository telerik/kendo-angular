export interface Transactions {
    id: number,
    currency: string,
    symbol: string,
    status: string,
    amount: number,
    stamp: string,
    deduction: string | null,
}
