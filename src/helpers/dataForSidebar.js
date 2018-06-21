export const SECTION_TEXT = 'SECTION_TEXT';
export const SUB_SECTIONS = 'SUB_SECTIONS';
export const SUB_SECTION_TEXT = 'SUB_SECTIONS';
export const SUB_SECTION_LINK = 'SUB_SECTION_LINK';

// -------------------------------------------------------------------------

export const BASICS = 'basics';
export const COMPONENTS = 'components';
// export const UIAAS = 'uiaas';

// Basics --------------------------------------------------------------------

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

// Dashboard ----------------------------------------------------------------

export const COMPONENTS_ANCHOR_BUTTON = 'anchor-button';
export const COMPONENTS_BUTTON = 'button';
export const COMPONENTS_BUTTON_GROUP = 'button-group';
export const COMPONENTS_CHECKBOX_GROUP = 'checkbox-group';
export const COMPONENTS_DROPDOWN = 'dropdown';
export const COMPONENTS_ACCORDION = 'accordion';
export const COMPONENTS_FORM = 'form';
export const COMPONENTS_INPUT = 'input';
export const COMPONENTS_MODAL = 'modal';
export const COMPONENTS_RADIO_GROUP = 'radio-group';
export const COMPONENTS_SVG_ICONS = 'svg-icons';
export const COMPONENTS_TABLE = 'table';
export const COMPONENTS_TEXTAREA = 'textarea';

const dataForComponentsSection = [
  { text: 'Anchor Button', link: COMPONENTS_ANCHOR_BUTTON },
  { text: 'Button Group', link: COMPONENTS_BUTTON_GROUP },
  { text: 'Button', link: COMPONENTS_BUTTON },
  { text: 'Checkbox Group', link: COMPONENTS_CHECKBOX_GROUP },
  { text: 'Dropdown', link: COMPONENTS_DROPDOWN },
  { text: 'Accordion', link: COMPONENTS_ACCORDION },
  { text: 'Form', link: COMPONENTS_FORM },
  { text: 'Input', link: COMPONENTS_INPUT },
  { text: 'Modal', link: COMPONENTS_MODAL },
  { text: 'Radio Group', link: COMPONENTS_RADIO_GROUP },
  { text: 'Svg Icons', link: COMPONENTS_SVG_ICONS },
  { text: 'Table', link: COMPONENTS_TABLE },
  { text: 'Textarea', link: COMPONENTS_TEXTAREA },
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
