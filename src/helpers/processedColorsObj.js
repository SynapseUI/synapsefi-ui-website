import { colors } from 'synapse-ui-testing';
import hexToRgba from 'hex-rgba';

const populateValuesInColorsObj = (colorsObj, keyName, nameColor, strColor) => {
  let nameText = '';
  let colorText = '';

  if (typeof nameColor === 'number') {
    nameText = nameColor.toString() + '%';
    colorText = hexToRgba(strColor, nameColor);
  } else {
    nameText = nameColor.toLowerCase().replace('_', ' ');
    colorText = strColor;
  }

  const values = { nameText, colorText };
  
  if (colorsObj[keyName] === undefined) colorsObj[keyName] = [values];
  else colorsObj[keyName].push(values);
};

const getEndIdxForEndColor = ({ endColor, colorEntries, startIdx, keyName, colorsObj }) => {
  let endIdx = 0;
  for (let i = startIdx; i < colorEntries.length; i++) {
    endIdx = i;
    const [nameColor, strColor] = colorEntries[i];

    populateValuesInColorsObj(colorsObj, keyName, nameColor, strColor);

    if (nameColor === 'TEAL' || nameColor === 'ARSENIC') {
      [75, 50, 25].forEach(percent => {
        populateValuesInColorsObj(colorsObj, keyName, percent, strColor);
      });
    }

    if (nameColor === endColor) break;
  }
  return endIdx;
};

const loopThroughAllColors = (colorsObj, colorEntries) => {
  for (let i = 0; i < colorEntries.length; i++) {
    const startColor = colorEntries[i][0];

    if (startColor === 'TEAL') {
      i = getEndIdxForEndColor({
        endColor: 'TEAL',
        colorEntries,
        startIdx: i,
        colorsObj,
        keyName: 'primary colors',
      });
    } else if (startColor === 'DARK') {
      i = getEndIdxForEndColor({
        endColor: 'WHITE',
        colorEntries,
        startIdx: i,
        keyName: 'dark to white colors',
        colorsObj,
      });
    } else if (startColor === 'ARSENIC') {
      i = getEndIdxForEndColor({
        endColor: 'ARSENIC',
        colorEntries,
        startIdx: i,
        keyName: 'arsenic colors',
        colorsObj,
      });
    } else if (startColor === 'CREATIVE') {
      i = getEndIdxForEndColor({
        endColor: 'RED_VIOLET',
        colorEntries,
        startIdx: i,
        keyName: 'secondary colors',
        colorsObj,
      });
    } else if (startColor === 'BABY_TEAL') {
      i = getEndIdxForEndColor({
        endColor: 'LIGHT_IVORY',
        colorEntries,
        startIdx: i,
        keyName: 'pastel colors',
        colorsObj,
      });
    }
  }

  return colorsObj;
};

export default loopThroughAllColors({}, Object.entries(colors));
