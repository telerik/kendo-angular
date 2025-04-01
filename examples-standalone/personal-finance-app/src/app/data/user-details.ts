import { CardDetails } from '../models/card-details';
import { User } from '../models/user';

export const user: User = {
    id: 1,
    name: 'Maria',
    surname: 'Johnson',
    email: 'mariajohnson@email.com',
    tag: '@Mhjd.J09i',
    birthday: new Date('1997-01-01'),
    country: ['USA'],
    address: 'James Dean 124',
    postCode: '12345',
};

export const cardDetails: CardDetails = {
    bank: 'Non-Existing Bank',
    expirationDate: new Date('2026-04-01'),
    cardHolder: 'Maria Johnson',
    cardNumber: '123 567 901 345',
};
