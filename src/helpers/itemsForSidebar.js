import {
  STYLE_GUIDE,
  COMPONENTS,
  STYLE_GUIDE_ICONS,
  STYLE_GUIDE_COLOR,
} from './constants/namesForSidebar';

export default {
  [STYLE_GUIDE]: {
    sectionText: 'Style Guide',
    children: {
      [STYLE_GUIDE_ICONS]: { text: 'Svg Icons', linkName: `${STYLE_GUIDE}/${STYLE_GUIDE_ICONS}` },
      [STYLE_GUIDE_COLOR]: { text: 'Colors', linkName: `${STYLE_GUIDE}/${STYLE_GUIDE_COLOR}` },
    },
  },
  [COMPONENTS]: {
    sectionText: 'Components',
    children: {},
  },
};
