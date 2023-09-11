import CustomInputForwardRefDemo from "./CustomInputForwardRef/Demo";
import DynamicMultipleRefs from "./DynamicMultipleRefs";
import FocusInputWithRef from "./inputRef";
import SimpleMultipleRefs from "./SimpleMultipleRefs";
import TimerWithRef from "./timerWithRef";

function App() {
  
  return (
    <>
      <TimerWithRef></TimerWithRef>
      <FocusInputWithRef></FocusInputWithRef>
      <SimpleMultipleRefs></SimpleMultipleRefs>
      <DynamicMultipleRefs></DynamicMultipleRefs>
      <CustomInputForwardRefDemo></CustomInputForwardRefDemo>
    </>
  )
}

export default App
