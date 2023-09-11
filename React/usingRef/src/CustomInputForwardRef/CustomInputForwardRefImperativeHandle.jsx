import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInputImperativeHandle = forwardRef((props, ref) => {
  const realInput = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        realInput.current.focus();
      }
    };
  });

  return (
    <input ref={realInput} />
  );
});

CustomInputImperativeHandle.displayName = 'CustomInputImperativeHandle';

export default CustomInputImperativeHandle;