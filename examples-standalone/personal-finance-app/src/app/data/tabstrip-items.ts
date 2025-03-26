import { TabStripItem } from '../models/tabstrip-item';
import {
  glofebinBankData,
  neopharmData,
  quantumData,
  solarFluxData,
} from './stock-chart-data';

export const tabStripItems: TabStripItem[] = [
  {
    selected: true,
    company: 'Solar Flux',
    chartData: solarFluxData,
  },
  {
    selected: false,
    company: 'Quantum',
    chartData: quantumData,
  },
  {
    selected: false,
    company: 'Neopharm',
    chartData: neopharmData,
  },
  {
    selected: false,
    company: 'Solaris',
    chartData: solarFluxData,
  },

  {
    selected: false,
    company: 'Glofebin Bank',
    chartData: glofebinBankData,
  },
];
