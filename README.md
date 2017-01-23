# keywatcher
JS For watching key inputs

### Two functions:

`watchKeys(inputEl, keyPress, onDelete)`

### Params
 - inputEl: the element to listen on
 - keyPress: a callback for any keypressed
 - onDelete: a callback for the backspace or delete key pressed

`watchKeyup(inputEl, keyUp)`

### Params
 - inputEl: the element to listen on
 - keyUp: the callback for a key released

## Example
```javascript
var el = document.getElementById('element')

watchKeys(el, function onKeyPress (e) {
  console.log('Key pressed: '+e.key)
}, function onDelete (e) {
  console.log('Either backspace or delete: '+e.key)
})

watchKeyup(el, function onKeyUp (e) {
  console.log('Key released: '+e.key)
})
```
## Notes
 - watchKeys uses the keyPressed event, which is currently `deprecated`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/keypress)
 - the keyPress callback is not called when the delete or backspace key is pressed
