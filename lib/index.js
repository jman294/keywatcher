'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchKeys;
// Watch for keyEvents on an element
// Params:
// inputEl: the element to listen on
// keyPress: a callback for any key pressed
// onDelete: a callback for a delete key pressed
function watchKeys(inputEl, keyPress, onDelete) {
  inputEl.addEventListener('keypress', function onKeyPress(e) {
    e.preventDefault();
    keyPress(e);
  });
  inputEl.addEventListener('keydown', function onKeyDown(e) {
    // Only prevents backspace and delete so the events can fire the keypressed event
    if (e.keyCode === 8 || e.keyCode === 46) {
      onDelete(e);
      e.preventDefault();
    }
  });
}