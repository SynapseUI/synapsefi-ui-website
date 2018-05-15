export default id => {
  const el = document.getElementById(id);
  const props = el.getBoundingClientRect();
  return {
    left: props.left + window.scrollX,
    top: props.top + window.scrollY,
  };
};
