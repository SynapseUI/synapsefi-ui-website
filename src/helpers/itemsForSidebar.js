export const BASICS = 'basics';
export const COMPONENTS = 'components';

export const BASICS_GETTING_STARTED = 'getting-started';
export const BASICS_ICONS = 'icons';
export const BASICS_COLOR = 'colors';
export const BASICS_BUTTONS = 'buttons';


export default {
  [BASICS]: {
    sectionText: 'Basics',
    subSections: {
      [BASICS_GETTING_STARTED]: {
        subSectionText: 'Getting Started',
        linkName: `/${BASICS}/${BASICS_GETTING_STARTED}/`,
      },
      [BASICS_ICONS]: {
        subSectionText: 'Svg Icons',
        linkName: `/${BASICS}/${BASICS_ICONS}/`,
      },
      [BASICS_COLOR]: {
        subSectionText: 'Colors',
        linkName: `/${BASICS}/${BASICS_COLOR}/`,
      },
      [BASICS_BUTTONS]: {
        subSectionText: 'Buttons',
        linkName: `/${BASICS}/${BASICS_BUTTONS}/`,
      },
    },
  },
  [COMPONENTS]: {
    sectionText: 'Components',
    subSections: {},
  },
};
