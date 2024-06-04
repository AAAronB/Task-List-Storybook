
import { fn } from "@storybook/test";

import Task from './Task';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args:{
    task:{
      "id": "1",
      "title": "Default Tasks",
      "state": "TASK_INBOX"
    },
  },
};

export const Pinned = {
  args:{
    task:{
      "id": "1",
      "title": "Pinned Tasks",
      "state": "TASK_PINNED"
    },
  },
};

export const Archived = {
  args: {
    task: {
      "id": "1",
      "title": "Archived Tasks",
      "state": "TASK_ARCHIVED"
    },
  },
};