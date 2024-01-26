import React, { useLayoutEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm.js';

const gen = rough.generator();

function createElement(x1, y1, x2, y2,shape) {
    console.log('createElement')
    switch (shape) {
        case 'line':
          return { x1, y1, x2, y2, roughEle: gen.line(x1, y1, x2, y2) };
        case 'rectangle':
          return { x1, y1, x2, y2, roughEle: gen.rectangle(x1, y1, x2 - x1, y2 - y1,{fill:'red', fillStyle: 'solid'}) };
        case 'circle':
          const radius = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) / 2;
          const centerX = (x1 + x2) / 2;
          const centerY = (y1 + y2) / 2;
          return { x1, y1, x2, y2, roughEle: gen.circle(centerX, centerY, radius) };
        default:
          return null;
      }
    }
const DrawingTool = ({ onSelectShape }) => {
  const [elements, setElements] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [actions, setActions] = useState([]);
  const [selectedShape, setSelectedShape] = useState('line')

  const handleShapeChange = (event) => {
    const selectedShape = event.target.value;
    setSelectedShape(selectedShape);
    onSelectShape(selectedShape);
  };

  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const rc = rough.canvas(canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    elements.forEach((ele) => rc.draw(ele.roughEle));
    
  }, [elements]);
  
 
  
  const startDrawing = (event) => {
    setDrawing(true);
    const { clientX, clientY } = event;
    const newEle = createElement(clientX, clientY, clientX, clientY,selectedShape);
    setElements((state) => [...state, newEle]); //copying to the previous state
  };
  const finishDrawing = () => {
    setDrawing(false);
  };
  const draw = (event) => {
    if (!drawing) return; 
    const { clientX, clientY } = event;
    const index = elements.length - 1; 
    const { x1, y1 } = elements[index];
    const updatedEle = createElement(x1, y1, clientX, clientY,selectedShape);
    const copyElement = [...elements];
    copyElement[index] = updatedEle; 
    setElements(copyElement);
  };
  return (
    <div className=''>
    <canvas
      id='canvas'
      width={window.innerWidth}
      height={window.innerWidth}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
    >
      Canvas
    </canvas>
    

    <div className='absolute top-1/2 flex flex-col left-3 pl-3 '>
      <label>
        <input
          type='radio'
          value='line'
          checked={selectedShape === 'line'}
          onChange={handleShapeChange}
        />
        Line
      </label>
      <label>
        <input
          type='radio'
          value='rectangle'
          checked={selectedShape === 'rectangle'}
          onChange={handleShapeChange}
        />
        Rectangle
      </label>
      <label>
        <input
          type='radio'
          value='circle'
          checked={selectedShape === 'circle'}
          onChange={handleShapeChange}
        />
        Circle
      </label>
    </div>
  </div>
  );
};
export default DrawingTool;