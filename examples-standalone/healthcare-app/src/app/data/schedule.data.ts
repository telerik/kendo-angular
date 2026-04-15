export interface DailyTask {
  id: number;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

export const INITIAL_TASKS: DailyTask[] = [
  {
    id: 1,
    title: 'Complete discharge paperwork for John Smith',
    priority: 'High',
    completed: false,
  },
  {
    id: 2,
    title: 'Call pharmacy for Emma Davis prescription',
    priority: 'Medium',
    completed: true,
  },
  { id: 3, title: 'Sign off on radiology reports', priority: 'Low', completed: false },
  { id: 4, title: 'Review insurance authorization requests', priority: 'High', completed: true },
  { id: 5, title: 'Update treatment plan for Mike Davis', priority: 'High', completed: false },
  { id: 6, title: 'Sign off on radiology reports', priority: 'Medium', completed: false },
  { id: 7, title: 'Review lab results for Sarah Johnson', priority: 'Low', completed: true },
  {
    id: 8,
    title: 'Complete discharge paperwork for John Smith',
    priority: 'High',
    completed: false,
  },
  { id: 9, title: 'Review lab results for Sarah Johnson', priority: 'High', completed: true },
  {
    id: 10,
    title: 'Review insurance authorization requests',
    priority: 'Medium',
    completed: true,
  },
];
