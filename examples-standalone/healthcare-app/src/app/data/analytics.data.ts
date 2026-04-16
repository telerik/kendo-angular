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
  current: number;
  target: number;
  min: number;
  max: number;
  markerLabel: string;
  markerValue: number;
  color: string;
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
    current: 11,
    target: 13,
    min: 0,
    max: 20,
    markerLabel: 'MIN',
    markerValue: 10,
    color: '#F5C542',
    plotBands: [
      { from: 0, to: 4, color: '#B8B8B8' },
      { from: 4, to: 9, color: '#D0D0D0' },
      { from: 9, to: 13, color: '#E8E8E8' },
    ],
  },
  {
    name: 'Hemoglobin',
    current: 7,
    target: 12.5,
    min: 0,
    max: 20,
    markerLabel: 'MIN',
    markerValue: 7,
    color: '#F4A0A0',
    plotBands: [
      { from: 0, to: 4, color: '#B8B8B8' },
      { from: 4, to: 8, color: '#D0D0D0' },
      { from: 8, to: 12.5, color: '#E8E8E8' },
    ],
  },
  {
    name: 'WBC Count',
    current: 16,
    target: 18,
    min: 0,
    max: 20,
    markerLabel: 'MAX',
    markerValue: 15,
    color: '#81D4A4',
    plotBands: [
      { from: 0, to: 6, color: '#B8B8B8' },
      { from: 6, to: 12, color: '#D0D0D0' },
      { from: 12, to: 18, color: '#E8E8E8' },
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
  { label: 'High Risk', range: '0\u201339', color: '#E65548' },
  { label: 'Medium Risk', range: '40\u201369', color: '#C5A84E' },
  { label: 'Low Risk', range: '70\u2013100', color: '#4CAF50' },
];
