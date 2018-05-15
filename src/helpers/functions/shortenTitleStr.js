export default str => {
  if (str.length > 15) return str.slice(0, 15) + ' ...';
  return str;
};
