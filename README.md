# keywatcher
JS For watching key inputs

One function:

`watchKeys(inputEl, keyPress, onDelete)`
<br\>

Params
 - inputEl: The element to listen on
 - keyPress: a callback for any keypressed
 - onDelete: a callback for the backspace or delete key pressed

## Example
```javascript
var el = document.getElementById('element')

watchKeys(el, function onKeyPress (e) {
  console.log('Key pressed: '+e.charCode)
}, function onDelete (e) {
  console.log('Either backspace or delete: '+e.charCode)
})
```
## Notes
watchKeys uses the keyPressed event, which is currently `deprecated`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/keypress)
