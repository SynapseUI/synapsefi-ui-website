export const SECTION_TEXT = 'SECTION_TEXT';
export const SUB_SECTIONS = 'SUB_SECTIONS';
export const SUB_SECTION_TEXT = 'SUB_SECTIONS';
export const SUB_SECTION_LINK = 'SUB_SECTION_LINK';

export const BASICS = 'basics';
export const COMPONENTS = 'components';

export const BASICS_GETTING_STARTED = 'getting-started';
export const BASICS_BUTTON_GUIDELINE = 'button-guideline';
export const BASICS_COLOR = 'color-list';
export const BASICS_SVG_ICON_LIST = 'svg-icon-list';

export const COMPONENTS_BUTTON = 'button';
export const COMPONENTS_SVG_ICONS = 'svg-icons';

export default {
  [BASICS]: {
    [SECTION_TEXT]: 'Basics',
    [SUB_SECTIONS]: {
      [BASICS_GETTING_STARTED]: {
        [SUB_SECTION_TEXT]: 'Getting Started',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_GETTING_STARTED}/`,
      },
      [BASICS_BUTTON_GUIDELINE]: {
        [SUB_SECTION_TEXT]: 'Button Guideline',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_BUTTON_GUIDELINE}/`,
      },
      [BASICS_COLOR]: {
        [SUB_SECTION_TEXT]: 'Color List',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_COLOR}/`,
      },
      [BASICS_SVG_ICON_LIST]: {
        [SUB_SECTION_TEXT]: 'Svg Icon List',
        [SUB_SECTION_LINK]: `/${BASICS}/${BASICS_SVG_ICON_LIST}/`,
      },
    },
  },
  [COMPONENTS]: {
    [SECTION_TEXT]: 'Components',
    [SUB_SECTIONS]: {
      [COMPONENTS_BUTTON]: {
        [SUB_SECTION_TEXT]: 'Button',
        [SUB_SECTION_LINK]: `/${COMPONENTS}/${COMPONENTS_BUTTON}/`,
      },
      [COMPONENTS_SVG_ICONS]: {
        [SUB_SECTION_TEXT]: 'Svg Icons',
        [SUB_SECTION_LINK]: `/${COMPONENTS}/${COMPONENTS_SVG_ICONS}/`,
      },
    },
  },
};
