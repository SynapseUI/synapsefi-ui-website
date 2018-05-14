const testFolder = './src/components/pages/components/buttons';
const fs = require('fs');
const glob = require('glob');

const getFileNames = function (src, callback) {
  glob(src + '/*/*', callback);
};

const combineAllSentenceBeforeExportDefault = sentences => {
  let outputStr = '';
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    outputStr += sentence + '\n';
    if (sentence.includes('export default')) break;
  }
  return outputStr;
};

getFileNames('./src/components/pages/components', (err, res) => {
  if (err) {
    console.log('Error', err);
  } else {
    // console.log(res);
    res.forEach(fileName => {
      console.log('fileName: ', fileName);
      const fileContent = fs.readFileSync(fileName, 'utf8');

      const sentences = fileContent.split('\n');

      const content = combineAllSentenceBeforeExportDefault(sentences);
      const divider = '\n// ------------------------------------------------------------\n';
      const jsxContent = '\nexport const jsxSnippet = `' + content + '`;' + '\n';

      fs.writeFileSync(fileName, content, 'utf8');
      fs.appendFileSync(fileName, divider, 'utf8');
      fs.appendFileSync(fileName, jsxContent, 'utf8');
    });
  }
});
