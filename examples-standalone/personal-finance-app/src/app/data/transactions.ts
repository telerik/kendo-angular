import { Transaction } from '../models/transaction';

function generateTransactions(): Transaction[] {
  const transactions: Transaction[] = Array.from({ length: 77 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index); // Spread dates across different days

    return {
      id: index + 1,
      merchant: `Merchant ${index + 1}`,
      dateOfPurchase: date,
      orderStatus: ['Published', 'Pending', 'Postponed'][
        Math.floor(Math.random() * 3)
      ] as 'Published' | 'Pending' | 'Postponed' | 'N/A',
      category: ['Food and Beverages', 'Shopping', 'Travel', 'Leisure'][
        Math.floor(Math.random() * 4)
      ] as 'Food and Beverages' | 'Shopping' | 'Travel' | 'Leisure' | 'N/A',
      paymentMethod: ['Debit Card', 'Credit Card', 'Bank Transfer'][
        Math.floor(Math.random() * 3)
      ] as 'Debit Card' | 'Credit Card' | 'Bank Transfer' | 'N/A',
      cardType: ['Visa', 'Master Card'][Math.floor(Math.random() * 2)] as
        | 'Visa'
        | 'Master Card'
        | 'N/A',
      amount: parseFloat((Math.random() * 1000).toFixed(2)),
      transactionHashFrom: `0x${Math.random().toString(16).substr(2, 12)}`,
      transactionHashTo: `0x${Math.random().toString(16).substr(2, 12)}`,
    };
  });

  return transactions;
}

export const gridTransactions: Transaction[] = generateTransactions();
