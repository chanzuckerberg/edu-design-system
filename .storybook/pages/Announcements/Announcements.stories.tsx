import { Announcements } from './Announcements';

export default {
  title: 'Pages/Announcements',
  component: Announcements,
  parameters: {
    axe: {
      // TODO: remove when "fpo" content is fully stubbed out
      disabledRules: ['color-contrast'],
    },
  },
};

export const StudentView = {};

export const TeacherView = {};
