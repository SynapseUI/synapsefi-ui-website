export const SECTION_TEXT = 'SECTION_TEXT';
export const SUB_SECTIONS = 'SUB_SECTIONS';
export const SUB_SECTION_TEXT = 'SUB_SECTIONS';
export const SUB_SECTION_LINK = 'SUB_SECTION_LINK';

export const BASICS = 'basics';
export const COMPONENTS = 'components';

export const BASICS_GETTING_STARTED = 'getting-started';
export const BASICS_ICONS = 'icons';
export const BASICS_COLOR = 'colors';
export const BASICS_BUTTONS = 'buttons';

export default {
  [BASICS]: {
    [SECTION_TEXT]: 'Basics',
    [SUB_SECTIONS]: {
      [BASICS_GETTING_STARTED]: {
        [SUB_SECTION_TEXT]: 'Getting Started',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_GETTING_STARTED}/`,
      },
      [BASICS_ICONS]: {
        [SUB_SECTION_TEXT]: 'Svg Icons',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_ICONS}/`,
      },
      [BASICS_COLOR]: {
        [SUB_SECTION_TEXT]: 'Colors',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_COLOR}/`,
      },
      [BASICS_BUTTONS]: {
        [SUB_SECTION_TEXT]: 'Buttons',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_BUTTONS}/`,
      },
    },
  },
  [COMPONENTS]: {
    [SECTION_TEXT]: 'Components',
    [SUB_SECTIONS]: {},
  },
};
