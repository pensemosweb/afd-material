import { useRef } from "react";
import CustomInput from "./CustomInputForwardRef";
import CustomInputImperativeHandle from "./CustomInputForwardRefImperativeHandle";

export default function CustomInputForwardRefDemo() {
  const inputRef = useRef(null);
  const inputImperativeHandle = useRef(null);

  return (<form>
    <h2>ForwardRef in CustomInput</h2>
    <CustomInput ref={inputRef}></CustomInput>
    <button
      onClick={() => inputRef.current.focus()}
    >focus</button>

    <CustomInputImperativeHandle ref={inputImperativeHandle}></CustomInputImperativeHandle>
    <button
      onClick={() => inputImperativeHandle.current.focus()}
    >Focus using imperative handle to limit CustomInput API</button>
  </form>);
}