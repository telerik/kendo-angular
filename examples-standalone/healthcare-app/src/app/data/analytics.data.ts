export interface AnalyticsPatient {
  name: string;
  id: string;
}

export interface VitalSeries {
  name: string;
  data: (number | null)[];
  color: string;
}

export interface LabMetric {
  name: string;
  unit: string;
  current: number;
  average: number;
  target: number;
  min: number;
  max: number;
  majorUnit: number;
  minRef: number;
  maxRef: number;
  plotBands: { from: number; to: number; color: string }[];
}

export interface AlertCategoryItem {
  category: string;
  value: number;
  color: string;
}

export interface RiskLevel {
  label: string;
  range: string;
  color: string;
}

export const ANALYTICS_PATIENTS: AnalyticsPatient[] = [
  { name: 'James Wilson', id: 'P-104582' },
  { name: 'Sophia Martinez', id: 'P-103291' },
  { name: "Michael O'Connor", id: 'P-105847' },
  { name: 'Ava Patel', id: 'P-102156' },
  { name: 'Emily Chen', id: 'P-106733' },
];

export const VITALS_SERIES_DATA: VitalSeries[] = [
  {
    name: 'Systolic BP',
    color: '#FF8a83',
    data: [27, 25, 27.5, 26, 33],
  },
  {
    name: 'Diastolic BP',
    color: '#F5C542',
    data: [25, 25, 33, 25, 15],
  },
  {
    name: 'Heart Rate',
    color: '#4CAF50',
    data: [14, 20, 25, 21, 15],
  },
  {
    name: 'SpO2 (%)',
    color: '#3F7FD4',
    data: [8.5, 15, 18, 20.5, 18],
  },
  {
    name: 'Temperature',
    color: '#9C5BC0',
    data: [8.5, 6, 15, 9, 11],
  },
  {
    name: 'Pulse',
    color: '#E75B8D',
    data: [1, 6.5, 9, 10, 13],
  },
];

export const ALERTS_CATEGORIES: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
];

export const ALERTS_INFO: number[] = [19, 8.5, 17.5, 22, 8.5, 9, 17, 12, 20, 10];
export const ALERTS_WARNING: number[] = [5, 8.5, 0, 1, 11, 3, 5, 8, 0, 3];
export const ALERTS_CRITICAL: number[] = [5, 9, 3, 9, 7, 3, 6, 6, 10, 1];

export const LAB_METRICS: LabMetric[] = [
  {
    name: 'Glucose',
    unit: 'mg/dL',
    current: 142,
    average: 118,
    target: 90,
    min: 0,
    max: 300,
    majorUnit: 50,
    minRef: 70,
    maxRef: 100,
    plotBands: [
      { from: 0, to: 54, color: '#FECACA' },
      { from: 54, to: 70, color: '#FDE68A' },
      { from: 70, to: 100, color: '#BBF7D0' },
      { from: 100, to: 126, color: '#FDE68A' },
      { from: 126, to: 300, color: '#FECACA' },
    ],
  },
  {
    name: 'Hemoglobin',
    unit: 'g/dL',
    current: 10.5,
    average: 11.8,
    target: 14,
    min: 0,
    max: 20,
    majorUnit: 2,
    minRef: 12,
    maxRef: 17,
    plotBands: [
      { from: 0, to: 7, color: '#FECACA' },
      { from: 7, to: 12, color: '#FDE68A' },
      { from: 12, to: 17, color: '#BBF7D0' },
      { from: 17, to: 20, color: '#FDE68A' },
    ],
  },
  {
    name: 'WBC Count',
    unit: '\u00d710\u00b3/\u00b5L',
    current: 12.5,
    average: 9.8,
    target: 7,
    min: 0,
    max: 30,
    majorUnit: 5,
    minRef: 4,
    maxRef: 10,
    plotBands: [
      { from: 0, to: 2, color: '#FECACA' },
      { from: 2, to: 4, color: '#FDE68A' },
      { from: 4, to: 10, color: '#BBF7D0' },
      { from: 10, to: 20, color: '#FDE68A' },
      { from: 20, to: 30, color: '#FECACA' },
    ],
  },
];

export const ALERTS_CATEGORY_DATA: AlertCategoryItem[] = [
  { category: 'High Cholesterol', value: 12, color: '#F4A0A0' },
  { category: 'Arrhythmia', value: 8, color: '#F5C542' },
  { category: 'Hypertension', value: 5, color: '#4CAF50' },
  { category: 'Medication Adherence', value: 4, color: '#5B8FF9' },
  { category: 'Cardiac Risk', value: 3, color: '#9C5BC0' },
  { category: 'Inflammation', value: 1, color: '#E75B8D' },
];

export const RISK_LEVELS: RiskLevel[] = [
  { label: 'Low Risk', range: '0\u201339', color: '#4CAF50' },
  { label: 'Medium Risk', range: '40\u201369', color: '#C5A84E' },
  { label: 'High Risk', range: '70\u2013100', color: '#E65548' },
];
