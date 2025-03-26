export class Transaction {
  id!: number;
  merchant: string = '';
  dateOfPurchase: Date | null = null;
  orderStatus: 'Published' | 'Pending' | 'Postponed' | 'N/A' = 'N/A';
  category: 'Food and Beverages' | 'Shopping' | 'Travel' | 'Leisure' | 'N/A' =
    'N/A';
  paymentMethod: 'Debit Card' | 'Credit Card' | 'Bank Transfer' | 'N/A' = 'N/A';
  cardType: 'Visa' | 'Master Card' | 'N/A' = 'N/A';
  amount: number | null = null;
  transactionHashFrom: `0x${string}` | null = null;
  transactionHashTo: `0x${string}` | null = null;
}
