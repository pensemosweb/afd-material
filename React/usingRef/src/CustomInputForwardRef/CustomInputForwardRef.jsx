import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return (<input ref={ref} />);
});

CustomInput.displayName = 'CustomInput';


export default CustomInput;