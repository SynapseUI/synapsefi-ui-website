export const STYLE_GUIDE = 'styleGuide';
export const COMPONENTS = 'components';

export const STYLE_GUIDE_ICONS = 'icons'
export const STYLE_GUIDE_COLOR = 'colors'
export const STYLE_GUIDE_BUTTONS = 'buttons'

export default {
  [STYLE_GUIDE]: {
    sectionText: 'Style Guide',
    subSections: {
      [STYLE_GUIDE_ICONS]: { subSectionText: 'Svg Icons', linkName: `${STYLE_GUIDE}-${STYLE_GUIDE_ICONS}` },
      [STYLE_GUIDE_COLOR]: { subSectionText: 'Colors', linkName: `${STYLE_GUIDE}-${STYLE_GUIDE_COLOR}` },
      [STYLE_GUIDE_BUTTONS]: { subSectionText: 'Buttons', linkName: `${STYLE_GUIDE}-${STYLE_GUIDE_BUTTONS}` },
    },
  },
  [COMPONENTS]: {
    sectionText: 'Components',
    subSections: {},
  },
};
