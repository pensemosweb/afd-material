import { useRef } from 'react';

const cats = ["https://placekitten.com/g/200/200", "https://placekitten.com/g/300/200", "https://placekitten.com/g/250/200"];

export default function DynamicMultipleRefs() {
  const slidesRef = useRef(null);


  const intoViewConfig = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  }

  function handleSlide(id) {
    const map = getMap();
    if (map) {
      const slide = map.get(id);
      slide.scrollIntoView(intoViewConfig);
    }
  }

  function getMap() {
    if(slidesRef.current === null) {
      slidesRef.current = new Map();
    }

    return slidesRef.current;
  }


  return (
    <section>
      <h2>Dynamic refs in a slider with useRef</h2>
      <div>
        <button onClick={() => handleSlide(1)}>Primero</button>
        <button onClick={() => handleSlide(2)}>Segundo</button>
        <button onClick={() => handleSlide(3)}>Tercero</button>
      </div>
      <div style={{ width: 300, overflow: 'hidden' }}>
        <div style={{ width: 1000, display: 'flex', gap: '1rem' }}>
          {
            cats.map((cat, index) => {
              return (<img 
                key={index}
                src={cat}
                ref={
                  (elem) => {
                    const map = getMap();
                    if (elem) {
                      map.set(index + 1, elem);
                    } else {
                      map.delete(index + 1);
                    }
                  }
                }
              />);
            })
          }
        </div>
      </div>
    </section>
  )
}