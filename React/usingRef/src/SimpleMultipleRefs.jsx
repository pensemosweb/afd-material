import { useRef } from 'react';

export default function CatsSlider() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const intoViewConfig = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  }

  function handleFirst() {
    firstRef.current.scrollIntoView(intoViewConfig);
  }

  function handleSecond() {
    secondRef.current.scrollIntoView(intoViewConfig);
  }

  function handleThird() {
    thirdRef.current.scrollIntoView(intoViewConfig);
  }

  return (
    <section>
      <h2>Simple slider with useRef</h2>
      <div>
        <button onClick={handleFirst}>Primero</button>
        <button onClick={handleSecond}>Segundo</button>
        <button onClick={handleThird}>Tercero</button>
      </div>
      <div style={{ width: 300, overflow: 'hidden' }}>
        <div style={{ width: 1000, display: 'flex', gap: '1rem' }}>
          <img src="https://placekitten.com/g/200/200" ref={firstRef} /> 
          <img src="https://placekitten.com/g/300/200" ref={secondRef} /> 
          <img src="https://placekitten.com/g/250/200" ref={thirdRef} /> 
        </div>
      </div>
    </section>
  )
}