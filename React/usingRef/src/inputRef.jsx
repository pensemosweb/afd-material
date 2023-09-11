/**
 * 1. useRef is used to access DOM nodes or HTML elements.
 * 2. useRef returns an object with a .current property.
 * 3. .current property returns the DOM node or HTML element.
 * 4. useRef will not trigger a re-render when its value changes.
 * 5. useRef is useful to store mutable values that do not trigger re-renders.
 * 6. useRef is useful to store mutable values that are not part of the state.
 * 7. useRef is useful to store mutable values that are not part of the props.
 * 8. useRef is useful to store mutable values that are not part of the context.
 * 9. useRef is useful to store mutable values that are not part of the callback.
 * 10. useRef is useful to store mutable values that are not part of the effect.
 */

import { useRef } from "react";
// 1. create a function component wich renders an input and a button
// 2. The input should be focused when the button is clicked
export default function FocusInputWithRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef with input</h2>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}