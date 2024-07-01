const DEFAULT_TODO = {
  title: `New todo`,
  completed: true,
};

const FILTER_ALL = `FILTER_ALL`;
const FILTER_COMPLETED = `FILTER_COMPLETED`;
const FILTER_PROGRESS = `FILTER_PROGRESS`;

const TODOS_FILTER = [
  {
    value: FILTER_ALL,
    title: `All`,
  },
  {
    value: FILTER_COMPLETED,
    title: `Completed`,
  },
  {
    value: FILTER_PROGRESS,
    title: `In progress`,
  },
];

export { DEFAULT_TODO, TODOS_FILTER, FILTER_ALL, FILTER_COMPLETED, FILTER_PROGRESS };
