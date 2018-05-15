export const SECTION_TEXT = 'SECTION_TEXT';
export const SUB_SECTIONS = 'SUB_SECTIONS';
export const SUB_SECTION_TEXT = 'SUB_SECTIONS';
export const SUB_SECTION_LINK = 'SUB_SECTION_LINK';

// -------------------------------------------------------------------------

export const BASICS = 'basics';
export const COMPONENTS = 'components';

// -------------------------------------------------------------------------

export const BASICS_GETTING_STARTED = 'getting-started';
export const BASICS_BUTTON_GUIDELINE = 'button-guideline';
export const BASICS_COLOR = 'color-list';
export const BASICS_SVG_ICON_LIST = 'svg-icon-list';

const dataForBasicsSection = [
  { text: 'Getting Started', link: BASICS_GETTING_STARTED },
  { text: 'Button Guideline', link: BASICS_BUTTON_GUIDELINE },
  { text: 'Color List', link: BASICS_COLOR },
  { text: 'Svg Icon List', link: BASICS_SVG_ICON_LIST },
];

// -------------------------------------------------------------------------

export const COMPONENTS_BUTTON = 'button';
export const COMPONENTS_SVG_ICONS = 'svg-icons';
export const COMPONENTS_TABLE = 'table';

const dataForComponentsSection = [
  { text: 'Button', link: COMPONENTS_BUTTON },
  { text: 'Svg Icons', link: COMPONENTS_SVG_ICONS },
  { text: 'Table', link: COMPONENTS_TABLE },
];

// -------------------------------------------------------------------------

const injectSubSectionData = (subsectionData, dataForSidebar, sectionName) => {
  const subSectionsObj = dataForSidebar[sectionName][SUB_SECTIONS];

  subsectionData.forEach(({ text, link }) => {
    subSectionsObj[link] = {};
    subSectionsObj[link][SUB_SECTION_TEXT] = text;
    subSectionsObj[link][SUB_SECTION_LINK] = `/${sectionName}/${link}/`;
  });
};

const dataForSidebar = {
  [BASICS]: { [SECTION_TEXT]: 'Basics', [SUB_SECTIONS]: {} },
  [COMPONENTS]: { [SECTION_TEXT]: 'Components', [SUB_SECTIONS]: {} },
};

injectSubSectionData(dataForBasicsSection, dataForSidebar, BASICS);
injectSubSectionData(dataForComponentsSection, dataForSidebar, COMPONENTS);

export default dataForSidebar;
