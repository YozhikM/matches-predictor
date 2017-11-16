global.addEventListener = () => {};
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
global.window = global;
