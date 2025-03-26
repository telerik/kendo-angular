import { Saving } from '../models/saving';
import { CustomMessagesService } from '../services/custom-messages.service';

const customMsgService: CustomMessagesService = new CustomMessagesService();

export const savings: Saving[] = [
  {
    title: 'Education',
    value: 3000,
  },
  {
    title: 'Dream Home',
    value: 25000,
  },
  {
    title: 'Car',
    value: 6500,
  },
  {
    title: 'Holidays',
    value: 20000,
  },
  {
    title: 'Healthcare',
    value: 50000,
  },
];
